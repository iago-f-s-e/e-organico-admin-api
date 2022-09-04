import { Injectable } from '@nestjs/common';
import { IMarketRepository } from '@src/domain/interfaces';

@Injectable()
export class MarketRepository implements IMarketRepository {
  public ping(): string {
    return 'pong';
  }
}
