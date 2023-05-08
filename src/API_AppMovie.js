let rootURL = 'https://www.omdbapi.com/?apikey=cdf64c68'

exports.search = (s) => {
	let url = `${rootURL}&s=${s}`
	return fetch(url)
		.then(response => response.json())
		.then(json => {
			return json.Search
		})
}

exports.detail = (id) => {
	let url = `${rootURL}&i=${id}`
	return fetch(url).then(response => response.json())
}