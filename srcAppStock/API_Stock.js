// async function hmmm(symbol) {
// 	let url = `${rootURL}${symbol}`
// 	const response = await fetch(url)
// 	const text = await response.text()
// 	let rawJSON = JSON.parse(text)
// 	let data = rawJSON["Global Quote"]
// 	return {
// 		stockCode: data["01. symbol"],
// 		stockChange: data["09. change"],
// 		stockChangePercent: data["10. change percent"],
// 	}
// }

let rootURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=CNDJO9WP98PVJP38&symbol='

export default function(symbol) {
	let url = `${rootURL}${symbol}`
	return fetch(url)
		.then(function (response) {
			return response.text()
		})
		.then(function (text) {
			// let tempJSON =text.replace
			let rawJSON = JSON.parse(text)
			let data = rawJSON['Global Quote']
			return {
				stockCode: data["01. symbol"],
				stockChange: data["09. change"],
				stockChangePercent: data["10. change percent"],
			}
		})
}

// Version 1.0
// export default function (symbol) {
//     let url = `${rootURL}${symbol}`
//     return fetch(url)
//         .then(function (response) {
//             return response.text();
//         })
//         .then(function (text) {
//             let rawJSON = JSON.parse(text);

//             let data = rawJSON['Global Quote'];
//             let stockCode = data["01. symbol"];
//             let stockChange = data["09. change"];
//             let stockChangePercent = data["10. change percent"];

//             return {
//                 stockCode,
//                 stockChange,
//                 stockChangePercent
//             }
//         })
// }