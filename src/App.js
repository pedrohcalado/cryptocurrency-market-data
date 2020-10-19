import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ranking from './pages/Ranking';
import CurrencyDetails from './pages/CurrencyDetails';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" data-test="app">
      <h1>Cryptocurrency</h1>
        <Switch>
          <Route path="/:id" render={(props) => <CurrencyDetails {...props} />} />
          <Route exact path="/" render={(props) => <Ranking {...props} />} />
        </Switch>
    </div>
  );
}

export default App;
