import currencyData from '../api/currencies.json'

export function countryToCurrency(countryCode) {
	let printedCurr = ''
	let matchedCurrency = Object.values(currencyData).find((c) => c.code.slice(0, 2) === countryCode)
	if (!matchedCurrency) {
		printedCurr = '$ USD'
	} else {
		printedCurr = `${matchedCurrency.symbol_native} ${matchedCurrency.code}`
	}

	return printedCurr
}
