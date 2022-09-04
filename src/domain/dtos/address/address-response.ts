import { StringOrNil } from '@src/types/global';

export type AddressResponse = {
  state: string;
  city: string;
  district: string;
  street: StringOrNil;
  zipCode: StringOrNil;
  complement: StringOrNil;
  lat: StringOrNil;
  long: StringOrNil;
  number: StringOrNil;
};
