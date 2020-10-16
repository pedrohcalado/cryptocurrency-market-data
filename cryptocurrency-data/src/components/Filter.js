import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setFilterOrder } from '../actions';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
      <label htmlFor="ASC">
        Ascendent
        <input
          type="radio"
          value="ASC"
          id="ASC"
          name="order"
          onChange={(e) => dispatch(setFilterOrder(e.target.value))}
        />
      </label>
      <label htmlFor="DESC">
        Descendent
        <input
          type="radio"
          value="DESC"
          id="DESC"
          name="order"
          onChange={(e) => dispatch(setFilterOrder(e.target.value))}
        />
      </label>
      </div>
      <select onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option value="last">Price</option>
        <option value="percentChange">Variation</option>
        <option value="baseVolume">Base volume</option>
        <option value="quoteVolume">Quoted volume</option>
      </select>
    </div>
  );
}
