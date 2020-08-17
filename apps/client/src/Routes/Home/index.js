import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'

export const Home = ({
  match,
  ...props
}) => {
  const { path } = match
  return (
    <Switch>
      
      {/* base route */}
      <Route exact path={path}>
        {() => (
          <HomePage />
        )}
      </Route>

    </Switch>
  )
}

export default Home
