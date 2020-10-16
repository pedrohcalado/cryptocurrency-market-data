import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { currencyPairInfo } from "../actions";
import Table from './Table';

export default function Ranking() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.reducer.isLoading);
  useEffect(() => {
  dispatch(currencyPairInfo());
  }
  , [dispatch]);
  return (
    <div>
      { isLoading && <div>Loading...</div>}
      { !isLoading && <Table /> }
    </div>
  );
}