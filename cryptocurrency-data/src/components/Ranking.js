import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { currencyPairInfo } from "../actions";

export default function Ranking() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.reducer.isLoading);
  useEffect(() => {
  dispatch(currencyPairInfo());
  }
  , [dispatch]);

  return (
    <div>
      Ranking
      { isLoading && <div>Loading...</div> }
    </div>
  );
}