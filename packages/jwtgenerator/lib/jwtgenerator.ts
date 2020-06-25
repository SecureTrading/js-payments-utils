import { IPayload } from './IPayload';

// tslint:disable-next-line:no-var-requires
const jwt = require('jsonwebtoken');

export function jwtgenerator(payload: IPayload, secret: string, iss: string): string {
  return jwt.sign(
    { iat: Math.round(Date.now() / 1000), iss, payload }, secret
  );
}
