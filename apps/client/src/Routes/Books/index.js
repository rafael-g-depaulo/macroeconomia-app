import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from './List'
import Show from './Show'

export const Books = ({
  match,
  ...props
}) => {
  const { path } = match
  return (
    <Switch>

      {/* route to list all books */}
      <Route exact path={`${path}`}>
        {() => (
          <List />
        )}
      </Route>

      {/* route to show a single book */}
      <Route exact path={`${path}/:id`}>
        {({ match }) => 
          <Show id={match.params.id} />
        }
      </Route>

    </Switch>
  )
}

export default Books
