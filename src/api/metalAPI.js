async function fetchMetalRates() {
	const url = 'https://api.metals.dev/v1/latest?api_key={APIKEY}&currency=USD&unit=toz'

	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
	})

	const result = await response.json()
	const path = Bun.file('./metals.json')
	Bun.write(path, JSON.stringify(result))
}
const api_key = import.meta.env.METALDEV_API
console.log(api_key)
//fetchMetalRates()
