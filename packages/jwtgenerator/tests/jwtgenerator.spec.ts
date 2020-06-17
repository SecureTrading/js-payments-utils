import { jwtgenerator } from '../lib/jwtgenerator';

const jsonwebtoken = require('jsonwebtoken');

// given
describe('jwtgenerator', () => {

  // when
  const obj = {
    iat: 1592298893548,
    'iss': 'someiss',
    'secret': 'somerandomkey',
    'payload': {
      'baseamount': '1000',
      'accounttypedescription': 'DESC',
      'currencyiso3a': 'GBP',
      'sitereference': 'somesref',
      'locale': 'en_GB'
    }
  };

  // then
  it('should create jwt which decoded has same payload like on the encoding', () => {
    const { payload, secret, iss } = obj;
    const jwt: string = jwtgenerator(payload, secret, iss);
    const resp = jsonwebtoken.verify(jwt, secret);
    expect(resp.payload).toEqual(payload);
  });
});
