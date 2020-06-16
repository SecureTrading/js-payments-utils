export interface IPayload {
  baseamount: string;
  accounttypedescription: string;
  currencyiso3a: string;
  sitereference: string;
  locale: string;
  pan?: string;
  expirydate?: string;
  securitycode?: string;
}
