import currencyData from '../api/currencies.json'

export function countryToCurrency(countryCode) {
	let matchedCurrency = Object.values(currencyData).find((c) => c.code.slice(0, 2) === countryCode)
	let printedCurr = `${matchedCurrency.symbol_native} ${matchedCurrency.code}`

	return printedCurr
}
