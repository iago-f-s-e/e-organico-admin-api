import { IProducer } from './entity';

export interface IProducerRepository {
  findPending(): Promise<IProducer[]>;
}
