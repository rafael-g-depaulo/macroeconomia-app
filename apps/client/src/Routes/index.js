import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import Home from './Home'
import Researchers from './Researchers'

export const Routes = ({
  ...props
}) => {
  return (
    <Router basename="/">

      {/* exact alias for "/" */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Switch>
        {/* researchers */}
        <Route path="/researchers" component={Researchers} />

        {/* home (the "casa" part is just a joke to show that multiple paths work)*/}
        <Route path={["/home", "/casa"]} component={Home} />

        {/* 404 */}
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
