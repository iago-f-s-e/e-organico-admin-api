import { IProducer } from './entity';

export interface IFindUserUseCase {
  pendingProducers(): Promise<IProducer[]>;
}
