let rootURL = 'https://www.omdbapi.com/?apikey=cdf64c68'

export async function search(s) {
	let url = `${rootURL}&s=${s}`
	const response = await fetch(url)
	const json = await response.json()
	return json.Search
}

export async function detail(id) {
	let url = `${rootURL}&i=${id}`
	const response = await fetch(url)
	return await response.json()
}