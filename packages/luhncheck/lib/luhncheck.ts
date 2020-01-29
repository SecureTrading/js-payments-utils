export function luhnCheck(cardNumber: string): boolean {
  const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');
  let bit = 1;
  let cardNumberLength = cardNumberWithoutSpaces.length;
  let sum = 0;

  while (cardNumberLength) {
    const val = parseInt(cardNumberWithoutSpaces.charAt(--cardNumberLength), 10);
    bit = bit ^ 1;
    const luhnCheckArray: number[] = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    const algorithmValue = bit ? luhnCheckArray[val] : val;
    sum += algorithmValue;
  }
  // noinspection RedundantConditionalExpressionJS
  return sum && sum % 10 === 0 ? true : false;
}
