import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ranking from './pages/Ranking';
import CurrencyDetails from './pages/CurrencyDetails';
import { Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Cryptocurrency</h1>
      <Router>
        <Switch>
          <Route path="/:id" render={(props) => <CurrencyDetails {...props} />} />
          <Route exact path="/" render={(props) => <Ranking {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
