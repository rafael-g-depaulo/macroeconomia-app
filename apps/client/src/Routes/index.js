import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import Researchers from './Researchers'
import Articles from './Articles'
import Papers from './Papers'
import Books from './Books'
import Home from './Home'
import AboutUs from './AboutUs'

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

        <Route path="/papers" component={Papers} />

        <Route path="/articles" component={Articles} />

        <Route path={["/books", "/book", "/livros"]} component={Books} />

        <Route path={["/aboutus", "/about-us", "/sobre-nos"]} component={AboutUs} />

        {/* 404 */}
        <Route path="*">
          <div>aa</div>
          {/* <Redirect to="/home" /> */}
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
