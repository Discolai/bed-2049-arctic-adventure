import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Booking from './components/booking/booking';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} switch/>
        <Route exact path="/booking" component={Booking} switch/>
      </Switch>
    </Router>
  );
}

export default App;
