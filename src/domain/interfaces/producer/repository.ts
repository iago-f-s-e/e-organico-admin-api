import { ProducerStatus } from '@src/types/entities';
import { IProducer } from './entity';

export interface IProducerRepository {
  findOnlyId(id: string): Promise<string | null>;
  findPending(): Promise<IProducer[]>;
  updateStatus(id: string, status: ProducerStatus): Promise<void>;
}
