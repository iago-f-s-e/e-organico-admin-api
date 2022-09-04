import { Injectable } from '@nestjs/common';
import { IProducerRepository } from '@src/domain/interfaces';

@Injectable()
export class ProducerRepository implements IProducerRepository {
  public ping(): string {
    return 'pong';
  }
}
