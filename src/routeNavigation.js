import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home';

class RouteNavigation extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" render={(props) => <Home {...props} /> } />
            {/* <Route path="/funds" render={(props) => <FundList {...props} /> } />
            <Route path="/fund/:id" render={(props) => <Fund {...props} /> } /> */}
        </Switch>
      </Router>
    );
  }
}

export default RouteNavigation;
