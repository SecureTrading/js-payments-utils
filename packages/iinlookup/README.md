# `IIN Lookup`

> Perform an IIN lookup to determine the credit card type

## Usage

```
import { iinLookup } from '@securetrading/ts-iin-lookup';
const details = iinLookup('4111111111111111');
console.log(details.type); // Payment brand e.g. VISA/MASTERCARD/AMEX etc
```
