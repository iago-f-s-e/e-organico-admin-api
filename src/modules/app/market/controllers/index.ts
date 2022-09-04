import { Controller } from '@nestjs/common';
import { IMarketController } from '@src/domain/interfaces';

@Controller()
export class MarketController implements IMarketController {
  public ping(): string {
    return 'pong';
  }
}
