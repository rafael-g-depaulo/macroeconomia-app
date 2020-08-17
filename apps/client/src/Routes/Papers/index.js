import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from "./List"
import Show from "./Show"

export const Papers = ({
  match,
  ...props
}) => {
  const { path } = match
  return (
    <Switch>

      {/* page to list all researchers */}
      <Route exact path={`${path}`}>
        {() => (
          <List />
        )}
      </Route>

      {/* page to show a single researcher */}
      <Route path={`${path}/:id`}>
        {({ match }) => (
          <Show id={match.params.id}/>
        )}
      </Route>

    </Switch>
  )
}

export default Papers
