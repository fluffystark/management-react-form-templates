import React, { Component, lazy, Suspense } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const AsyncLogin = lazy(() => import('Screens/Login/Login'));

class Routes extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}> 
          <Switch>
            <Route exact path="/" component={AsyncLogin}/>
          </Switch>
        </Suspense>  
      </Router>
    );
  }
}

export default Routes;
