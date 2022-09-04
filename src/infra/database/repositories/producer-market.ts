import { Injectable } from '@nestjs/common';
import { IProducerMarketRepository } from '@src/domain/interfaces';

@Injectable()
export class ProducerMarketRepository implements IProducerMarketRepository {
  public ping(): string {
    return 'PONG';
  }
}
