import { Controller, Get, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { PendingProducerResponse } from '@src/domain/dtos/producer';

import { IProducerController } from '@src/domain/interfaces';
import { PendingProducer } from '../mapping';
import { FindProducerUseCase, UpdateProducerUseCase } from '../use-cases';

@Controller()
export class ProducerController implements IProducerController {
  constructor(
    private readonly findUseCase: FindProducerUseCase,
    private readonly updateUseCase: UpdateProducerUseCase
  ) {}

  @Get('pending')
  public async getPendingProducers(): Promise<PendingProducerResponse[]> {
    return PendingProducer.pending(await this.findUseCase.pendingProducers());
  }

  @Patch(':id/accept')
  public async acceptPendingProducers(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ): Promise<{ id: string }> {
    await this.updateUseCase.accept(id);

    return { id };
  }
}
