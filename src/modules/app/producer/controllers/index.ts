import { Controller } from '@nestjs/common';

import { IProducerController } from '@src/domain/interfaces';

@Controller()
export class ProducerController implements IProducerController {
  public ping(): string {
    return 'ok';
  }
}
