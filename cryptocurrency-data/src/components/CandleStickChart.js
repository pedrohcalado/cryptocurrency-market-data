import React, { useEffect, useState } from 'react';
import fetchChartData from '../services/fetchChartData';
import moment from 'moment';
import { Chart } from "react-google-charts";

export default function CandleStickChart(props) {
  const { currencyPair } = props;
  const [chartData, setChartData] = useState([]);
  const [month, setMonth] = useState([1577887988, 1580479988]);
  // const [month, setMonth] = useState([moment().startOf('month').unix(), moment().valueOf()]);

  useEffect(() => {
    fetchChartData(currencyPair, month).then(data => setChartData(data));
  }, [currencyPair, month]);

  const chartDataArr = chartData.map(t => [moment.unix(t.date).format('MM/DD/YYYY'), t.low, t.open, t.close, t.high]);
  chartDataArr.unshift(['day', 'low', 'open', 'close', 'high']);
  const chartMonth = () => {
    return (
      <div>
        <p>Select a month in 2020:</p>
        <select onChange={(e) => setMonth(e.target.value.split(","))}>
          <option value={[1577887988, 1580479988]}>January</option>
          <option value={[1580566388, 1582985588]}>February</option>
          <option value={[1583071988, 1585663988]}>March</option>
          <option value={[1585750388, 1588255988]}>April</option>
          <option value={[1588342388, 1590934388]}>May</option>
          <option value={[1591020788, 1593526388]}>June</option>
          <option value={[1593612788, 1596204788]}>July</option>
          <option value={[1596291188, 1598796788]}>August</option>
          <option value={[1598969588, 1601475188]}>September</option>
          <option value={[1601561588, 1604153588]}>October</option>
          <option value={[1604239988, 1606745588]}>November</option>
          <option value={[1606831988, 1609423988]}>December</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      <h3>Candlestick chart</h3>
      {chartMonth()}
      <Chart
        width={'100%'}
        height={350}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={chartDataArr}
        options={{
          legend: 'none',
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
            risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}
