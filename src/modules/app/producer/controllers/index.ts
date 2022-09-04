import { Controller, Get } from '@nestjs/common';
import { PendingProducerResponse } from '@src/domain/dtos/producer';

import { IProducerController } from '@src/domain/interfaces';
import { PendingProducer } from '../mapping';
import { FindProducerUseCase } from '../use-cases';

@Controller()
export class ProducerController implements IProducerController {
  constructor(private readonly findUseCase: FindProducerUseCase) {}

  @Get('pending-producers')
  public async getPendingProducers(): Promise<PendingProducerResponse[]> {
    return PendingProducer.pending(await this.findUseCase.pendingProducers());
  }
}
