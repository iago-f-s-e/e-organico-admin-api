import { PendingProducerResponse } from '@src/domain/dtos/producer';

export interface IProducerController {
  getPendingProducers(): Promise<PendingProducerResponse[]>;
  acceptPendingProducers(id: string): Promise<{ id: string }>;
}
