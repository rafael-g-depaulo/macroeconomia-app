import React from 'react'
import styled from 'styled-components'

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

export const HomePage = ({
  ...props
}) => {
  return (
    <Wireframe>
      <Container>
        <Grid>
          <AboutBox />
          <ResearchersBox />
        </Grid>
      </Container>
    </Wireframe>
  )
}

export default HomePage
