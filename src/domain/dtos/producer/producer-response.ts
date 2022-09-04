import { CertificationType } from '@src/types/entities';
import { AddressResponse } from '../address';

export type PendingProducerResponse = {
  id: string;
  name: string;
  phone: string;
  email: string;
  certificationType: CertificationType;
  address: AddressResponse;
};
