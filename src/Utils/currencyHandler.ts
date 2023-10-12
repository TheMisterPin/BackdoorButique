export const currencyHandler = new Intl.NumberFormat("en-US",{
  currency: "EUR",
  style: "currency",
});


export function currencyFormat(number: number) {
  return currencyHandler.format(number);
}
