import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import BaseRoute from 'Components/BaseRoute'
import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'

import AboutBox from './AboutBox'
import ResearchersBox from './ResearchersBox'

const Grid = styled.div`
  display: grid;
  grid: 
    "aboutus researchers" / 2fr 3fr
  ;

  grid-gap: 30px;
`

export const Home = ({
  ...props
}) => {
  return (
    <BaseRoute path="/home" aliases={["/"]}>
      {/* base route */}
      <Route exact path={["/home", "/"]}>
        <Wireframe>
          <Container>
            <Grid>
              <AboutBox />
              <ResearchersBox />
            </Grid>
          </Container>
        </Wireframe>
      </Route>
    </BaseRoute>
  )
}

export default Home
