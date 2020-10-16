import React from 'react';
import { useSelector } from 'react-redux';

export default function Table() {
  const data = useSelector(state => state.reducer.currencyPairInfo)
  return (
    <table>
          <thead>
            <tr>
              <th>Currency pair</th>
              <th>Price</th>
              <th>Variation</th>
              <th>Base volume</th>
              <th>Quoted volume</th>
            </tr>
          </thead>
          <tbody>
              {data !== undefined && data.map(pair =>
                <tr key={pair[1].id}>
                  <td>{pair[0]}</td>
                  <td>{pair[1].last}</td>
                  <td>{pair[1].percentChange}</td>
                  <td>{pair[1].baseVolume}</td>
                  <td>{pair[1].quoteVolume}</td>
                </tr>
                )}
          </tbody>
        </table>
  );
}
