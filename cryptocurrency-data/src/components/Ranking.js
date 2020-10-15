import React from 'react';
import { useEffect } from "react";
import fetchCurrencyPairInfo from "../services/fetchCurrencyPairInfo";

export default function Ranking() {
  useEffect(() => {
  fetchCurrencyPairInfo();
  }
  , []);

  return (
    <div>
      Ranking
    </div>
  );
}