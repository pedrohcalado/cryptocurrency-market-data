import React from 'react';
import { Link } from 'react-router-dom';
import CandleStickChart from '../components/CandleStickChart';
import OrderBook from '../components/OrderBook';
import TradeHistory from '../components/TradeHistory';

export default function CurrencyDetails(props) {
  const { match } = props;
  return (
    <div>
      <h2>Details - {match.params.id}</h2>
      <Link to="/">Go back</Link>
      <OrderBook currencyPair={match.params.id} />
      <TradeHistory currencyPair={match.params.id} />
      <CandleStickChart currencyPair={match.params.id} />
    </div>
  );
}
