export default function fetchChartData(currencyPair, [start, end]) {
  const URL = `https://poloniex.com/public?command=returnChartData&currencyPair=${currencyPair}&start=${start}&end=${end}&period=14400`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data,
      (error) => console.log('fetchChartData', error)
    );
}
