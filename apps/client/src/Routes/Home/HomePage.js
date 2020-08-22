import React from 'react'
import styled from 'styled-components'

import LazyPage from 'Components/LazyPage'

import AboutBox from './AboutBox'
import ResearchersBox from './ResearchersBox'

const Grid = styled.div`
  display: grid;

  @media (min-width: 801px) {
    grid: 
      [row1-start] "aboutus researchers" 1fr [row1-end]
      /  5fr minmax(200px, 7fr)
    ;
  }

  grid-gap: 30px;

  max-width: 1000px;
  margin: auto;

  @media (max-width: 800px) {
    grid: 
      [row1-start] "aboutus" 1fr [row1-end]
      /  1fr
    ;

    > *:not(:first-child) {
      display: none;
    }
  }
`

export const HomePage = ({
  ...props
}) => {
  return (
    <LazyPage>
      <Grid>
        <AboutBox />
        <ResearchersBox />
      </Grid>
    </LazyPage>
  )
}

export default HomePage
