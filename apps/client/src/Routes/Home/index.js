import React from 'react'
import { Route } from 'react-router-dom'

import BaseRoute from 'Components/BaseRoute'
import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'

export const Home = ({
  ...props
}) => {
  return (
    <BaseRoute path="/home" aliases={["/"]}>
      {/* base route */}
      <Route>
        <Wireframe>
          <Container>
            <p>asdasd</p>
            <p>11111</p>
            <p>oiii</p>
            <p>oiii</p>
            <p>oiii</p>
            <p>oiii</p>
          </Container>
        </Wireframe>
      </Route>
    </BaseRoute>
  )
}

export default Home
