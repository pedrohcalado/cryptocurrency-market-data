import React, { useEffect, useState } from 'react';
import fetchChartData from '../services/fetchChartData';
import moment from 'moment';
import { Chart } from "react-google-charts";

export default function CandleStickChart(props) {
  const { currencyPair } = props;
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetchChartData(currencyPair).then(data => setChartData(data));
  }, [currencyPair]);
  const chartDataArr = chartData.map(t => [moment.unix(t.date).format('MM/DD/YYYY'), t.low, t.open, t.close, t.high]);
  chartDataArr.unshift(['day', 'low', 'open', 'close', 'high']);

  return (
    <div>
      <h3>Candlestick chart</h3>
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
