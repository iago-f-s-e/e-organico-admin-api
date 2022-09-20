import { Injectable } from '@nestjs/common';
import { IFindProducerUseCase } from '@src/domain/interfaces';
import { Producer } from '@src/infra/database/entities';
import { ProducerRepository } from '@src/infra/database/repositories';

@Injectable()
export class FindProducerUseCase implements IFindProducerUseCase {
  constructor(private readonly repository: ProducerRepository) {}

  public pendingProducers(): Promise<Producer[]> {
    return this.repository.findPending();
  }
}
