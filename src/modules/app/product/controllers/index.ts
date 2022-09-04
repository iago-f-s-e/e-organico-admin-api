import { Controller } from '@nestjs/common';
import { IProductController } from '@src/domain/interfaces';

@Controller()
export class ProductController implements IProductController {
  public ping(): string {
    return 'ok';
  }
}
