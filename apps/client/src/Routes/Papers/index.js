import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from "./List"

export const Papers = ({
  match,
  ...props
}) => {
  const { path } = match
  return (
    <Switch>

      {/* page to list all papers */}
      <Route exact path={`${path}`}>
        {() => (
          <List />
        )}
      </Route>

    </Switch>
  )
}

export default Papers
