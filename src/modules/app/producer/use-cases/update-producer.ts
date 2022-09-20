import { Injectable, NotFoundException } from '@nestjs/common';
import { IUpdateProducerUseCase } from '@src/domain/interfaces';
import { ProducerRepository } from '@src/infra/database/repositories';
import { CheckProducerExists } from './check-producer-exists';

@Injectable()
export class UpdateProducerUseCase implements IUpdateProducerUseCase {
  constructor(
    private readonly repository: ProducerRepository,
    private readonly checkExists: CheckProducerExists
  ) {}

  public async accept(id: string): Promise<void> {
    if (!(await this.checkExists.exec(id)).valueOf())
      throw new NotFoundException('Producer does not exists');

    await this.repository.updateStatus(id, 'ACTIVE');
  }
}
