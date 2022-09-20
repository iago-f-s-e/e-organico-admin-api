import { Injectable } from '@nestjs/common';
import { ICheckProducerExists } from '@src/domain/interfaces';
import { ProducerRepository } from '@src/infra/database/repositories';

@Injectable()
export class CheckProducerExists implements ICheckProducerExists {
  constructor(private readonly repository: ProducerRepository) {}

  public async exec(id: string): Promise<boolean> {
    return !!(await this.repository.findOnlyId(id));
  }
}
