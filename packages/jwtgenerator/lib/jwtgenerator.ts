import { IPayload } from './IPayload';

// tslint:disable-next-line:no-var-requires
const jwt = require('jsonwebtoken');

export function jwtgenerator(payload: IPayload, secret: string): string {
  return jwt.sign(
    { iat: Date.now(), payload }, secret
  );
}
