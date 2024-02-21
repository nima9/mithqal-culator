async function fetchMetalRates() {
	const url =
		'https://api.metals.dev/v1/latest?api_key=LLG8K5WTPPH2BYGZHVYF121GZHVYF&currency=USD&unit=toz'

	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
	})

	const result = await response.json()
	const path = Bun.file('./metals.json')
	Bun.write(path, JSON.stringify(result))
}

fetchMetalRates()
