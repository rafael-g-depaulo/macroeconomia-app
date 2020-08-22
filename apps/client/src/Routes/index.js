import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import LazyRoute from 'Components/LazyRoute'

const Researchers = lazy(() => import('./Researchers'))
const Articles = lazy(() => import('./Articles'))
const AboutUs = lazy(() => import('./AboutUs'))
const Events = lazy(() => import('./Events'))
const Papers = lazy(() => import('./Papers'))
const Books = lazy(() => import('./Books'))
const Home = lazy(() => import('./Home'))

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
        <LazyRoute path="/researchers">
          <Researchers />
        </LazyRoute>

        <LazyRoute path="/home">
          <Home />
        </LazyRoute>

        <LazyRoute path={["/papers", "/paper"]}>
          <Papers />
        </LazyRoute>

        <LazyRoute path={["/articles", "/article"]}>
          <Articles />
        </LazyRoute>

        <LazyRoute path={["/books", "/book", "/livros"]} >
          <Books />
        </LazyRoute>

        <LazyRoute path={["/events", "/event", "/eventos", "/evento"]} >
          <Events />
        </LazyRoute>

        <LazyRoute path={["/aboutus", "/about-us", "/sobre-nos"]} >
          <AboutUs />
        </LazyRoute>

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
