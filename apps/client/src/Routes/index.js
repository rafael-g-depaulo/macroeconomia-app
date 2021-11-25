import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import LazyRoute from 'Components/LazyRoute'
// import Loading from 'Components/Loading'

const Researchers = lazy(() => import('./Researchers'))
const Articles = lazy(() => import('./Articles'))
const AboutUs = lazy(() => import('./AboutUs'))
const DMBulletins = lazy(() => import('./DM Bulletins'))
const Events = lazy(() => import('./Events'))
const Papers = lazy(() => import('./Papers'))
const Books = lazy(() => import('./Books'))
const Videos = lazy(() => import('./Videos'))
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

        <LazyRoute path={["/bulletins", "/bulletims", "/boletins", "/dm-bulletins"]} >
          <DMBulletins />
        </LazyRoute>

        <LazyRoute path={["/aboutus", "/about-us", "/sobre-nos"]} >
          <AboutUs />
        </LazyRoute>

        <LazyRoute path={["/videos", "/video"]} >
          <Videos />
        </LazyRoute>

        {/* 404 */}
        <Route path="*">
          {/* <Loading fullpage /> */}
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
