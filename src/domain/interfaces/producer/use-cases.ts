import { IProducer } from './entity';

export interface IFindProducerUseCase {
  pendingProducers(): Promise<IProducer[]>;
}

export interface IUpdateProducerUseCase {
  accept(id: string): Promise<void>;
}

export interface ICheckProducerExists {
  exec(id: string): Promise<boolean>;
}
