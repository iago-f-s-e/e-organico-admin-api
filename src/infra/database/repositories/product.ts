import { Injectable } from '@nestjs/common';
import { IProductRepository } from '@src/domain/interfaces';

@Injectable()
export class ProductRepository implements IProductRepository {
  public ping(): string {
    return 'pong';
  }
}
