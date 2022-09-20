import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProducerRepository } from '@src/domain/interfaces';
import { ProducerStatus } from '@src/types/entities';
import { Repository } from 'typeorm';
import { Producer } from '../entities';

@Injectable()
export class ProducerRepository implements IProducerRepository {
  constructor(@InjectRepository(Producer) private readonly producer: Repository<Producer>) {}

  public findPending(): Promise<Producer[]> {
    return this.producer
      .createQueryBuilder('producer')
      .select([
        'producer.id',
        'producer.certificationType',
        'user.name',
        'user.phone',
        'user.email',
        'address.state',
        'address.city',
        'address.zipCode',
        'address.street',
        'address.district',
        'address.complement',
        'address.number',
        'address.lat',
        'address.long'
      ])
      .innerJoin('producer.user', 'user')
      .innerJoin('user.address', 'address')
      .where('producer.status = :status', { status: 'PENDING' })
      .getMany();
  }

  public async findOnlyId(id: string): Promise<string | null> {
    const producer = await this.producer
      .createQueryBuilder('producer')
      .select('producer.id')
      .where('producer.id = :id', { id })
      .limit(1)
      .getOne();

    if (!producer) return null;

    return producer.id;
  }

  public async updateStatus(id: string, status: ProducerStatus): Promise<void> {
    await this.producer.update({ id }, { status });
  }
}
