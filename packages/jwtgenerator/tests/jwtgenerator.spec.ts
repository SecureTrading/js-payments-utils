import { jwtgenerator } from '../lib/jwtgenerator';

const jsonwebtoken = require('jsonwebtoken');

// given
describe('jwtgenerator', () => {

  // when
  const obj = {
    iat: 1592298893548,
    'iss': 'am0310.autoapi',
    'secret': 'ja<n}yP]3$1E$iUYtn_*i7))24I,=^',
    'payload': {
      'baseamount': '1000',
      'accounttypedescription': 'ECOM',
      'currencyiso3a': 'GBP',
      'sitereference': 'test_james38641',
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
