import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ranking from './pages/Ranking';
import CurrencyDetails from './pages/CurrencyDetails';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Cryptocurrency</h1>
      <Switch>
        <Route path="/:id" render={(props) => <CurrencyDetails />} />
        <Route exact path="/" render={(props) => <Ranking />} />
      </Switch>
    </div>
  );
}

export default App;
