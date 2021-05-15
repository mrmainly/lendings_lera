import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './pages/HomePage/index'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
