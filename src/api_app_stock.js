let rootURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=CNDJO9WP98PVJP38&symbol=";

export default function (symbol) {
    let url = `${rootURL}${symbol}`
    return fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            let rawJSON = JSON.parse(text);

            let data = rawJSON['Global Quote'];
            let stockIndex = data["01. symbol"];
            let stockChange = data["09. change"];
            let stockChangePercent = data["10. change percent"];

            return {
                stockIndex,
                stockChange,
                stockChangePercent
            }
        })
}