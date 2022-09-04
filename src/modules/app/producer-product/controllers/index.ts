import { Controller } from '@nestjs/common';

import { IProducerProductController } from '@src/domain/interfaces';

@Controller()
export class ProducerProductController implements IProducerProductController {
  public ping(): string {
    return 'ok';
  }
}
