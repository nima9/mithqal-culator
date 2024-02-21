//const APIKEY = import.meta.env.METALDEV_API
//const url = 'https://api.metals.dev/v1/latest?api_key=' + APIKEY + '&currency=USD&unit=toz'
const url =
	'https://api.metals.dev/v1/latest?api_key=' +
	'2GZLYS6L4KDAIVKOMUG6414KOMUG6' +
	'&currency=USD&unit=toz'

async function fetchMetalRates() {
	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
	})

	const result = await response.json()
	const path = Bun.file('./metals.json')
	Bun.write(path, JSON.stringify(result))
}

console.log(url)
//fetchMetalRates()
