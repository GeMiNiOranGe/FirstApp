let rootURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=CNDJO9WP98PVJP38&symbol='

export default async function(symbol) {
	let url = `${rootURL}${symbol}`
	const response = await fetch(url)
	const text = await response.text()
	let rawJSON = JSON.parse(text)
	let data = rawJSON['Global Quote']
	return {
		stockCode: data["01. symbol"],
		stockChange: data["09. change"],
		stockChangePercent: data["10. change percent"],
	}
}
