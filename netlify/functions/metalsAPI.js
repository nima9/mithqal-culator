const APIKEY = process.env.METALDEV_API.toString()
const url = 'https://api.metals.dev/v1/latest?api_key=' + APIKEY + '&currency=USD&unit=toz'

if (!APIKEY) {
	throw new Error('METALDEV_API environment variable is not set!!! -nima')
}

async function fetchMetalRates() {
	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
	})

	const result = await response.json()
	const path = Bun.file('src/api/metals.json')
	Bun.write(path, JSON.stringify(result))
}

console.log(url)
fetchMetalRates()
