export interface IPayload {
  iss: string;
  baseamount: string;
  accounttypedescription: string;
  currencyiso3a: string;
  sitereference: string;
  locale: string;
  pan?: string;
  expirydate?: string;
  securitycode?: string;
}
