import { Controller } from '@nestjs/common';
import { IProducerMarketController } from '@src/domain/interfaces';

@Controller()
export class ProducerMarketController implements IProducerMarketController {
  public ping(): string {
    return 'PONG';
  }
}
