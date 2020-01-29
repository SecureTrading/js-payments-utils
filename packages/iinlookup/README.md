# `IIN Lookup`

> Perform an IIN lookup to determine the credit card type

## Usage

```
import { IinLookup } from '@securetrading/ts-iin-lookup';
const lookup = new IinLookup();
const details = lookup.lookup('4111111111111111');
console.log(details.type); // Payment brand e.g. VISA/MASTERCARD/AMEX etc
```
