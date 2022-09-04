import { PendingProducerResponse } from '@src/domain/dtos/producer';
import { Producer } from '@src/infra/database/entities';

export class PendingProducer {
  public static pending(producers: Producer[]): PendingProducerResponse[] {
    return producers.map(producer => {
      const { user, ...data } = producer;

      return {
        ...data,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address[0]
      };
    });
  }
}
