import { IPayload } from './IPayload';

// tslint:disable-next-line:no-var-requires
const jwt = require('jsonwebtoken');

export function jwtgenerator(payload: IPayload, secret: string, iss: string): string {
  return jwt.sign(
    { iat: Date.now(), iss, payload }, secret
  );
}
