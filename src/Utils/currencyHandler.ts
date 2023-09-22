const currencyHandler = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency"
})

export function currencyFormat(number: number) {
    return currencyHandler.format(number)
}