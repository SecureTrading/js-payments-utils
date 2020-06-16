import { jwtgenerator } from '../lib/jwtgenerator';

const jsonwebtoken = require('jsonwebtoken');

// given
describe('jwtgenerator', () => {

  // when
  const obj = {
    iat: 1592298893548,
    payload: {
      accounttypedescription: 'ABCD',
      baseamount: '1000',
      currencyiso3a: 'GBP',
      iss: 'testiss',
      locale: 'en_GB',
      sitereference: 'testaccount'
    },
    secret: 'somerandomsecret'
  };

  // then
  it('should create jwt which decoded has same payload like on the encoding', () => {
    const { payload, secret } = obj;
    const jwt: string = jwtgenerator(payload, secret);
    const resp = jsonwebtoken.verify(jwt, secret);
    expect(resp.payload).toEqual(payload);
  });
});
