import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from './List'

export const Events = ({
  match,
  ...props
}) => {
  const { path } = match

  return (
    <Switch>

      <Route exact path={`${path}`}>
        <List />
      </Route>

    </Switch>
  )
}

export default Events
