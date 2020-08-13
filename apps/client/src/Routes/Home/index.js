import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import BaseRoute from 'Components/BaseRoute'
import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'

import AboutBox from './AboutBox'
import ResearchersBox from './ResearchersBox'
import { fetchAboutUs } from 'Api/aboutUs'

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
  useEffect(() => {
    console.log("DSFSFDF")
    fetchAboutUs()
      .then(console.log)
  }, [])
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
