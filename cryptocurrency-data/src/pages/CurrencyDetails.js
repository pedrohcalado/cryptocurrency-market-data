import React from 'react';
import { Link } from 'react-router-dom';
import OrderBook from '../components/OrderBook';

export default function CurrencyDetails(props) {
  const { match } = props;
  return (
    <div>
      <h2>Details - {match.params.id}</h2>
      <Link to="/">Go back</Link>
      <OrderBook currencyPair={match.params.id} />
    </div>
  );
}
