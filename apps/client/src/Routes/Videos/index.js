import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import List from './List'

export const Videos = ({ match }) => {
  const { path } = match
  
  return (
    <Switch>

      {/* page to list all researchers */}
      <Route exact path={`${path}`}>
        {() => (
          <List />
        )}
      </Route>

    </Switch>
  )
}

export default Videos
