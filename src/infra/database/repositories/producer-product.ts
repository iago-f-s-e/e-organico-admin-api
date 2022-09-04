import { Injectable } from '@nestjs/common';
import { IProducerProductRepository } from '@src/domain/interfaces';

@Injectable()
export class ProducerProductRepository implements IProducerProductRepository {
  public ping(): string {
    return 'PONG';
  }
}
