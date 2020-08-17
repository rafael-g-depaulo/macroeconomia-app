import React from 'react'

import { useAllResearchers } from 'Api/researcher'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import ResearcherList from 'Components/ResearcherList'
import styled from 'styled-components'

const MyResearcherList = styled(ResearcherList)`
  overflow: visible;
  max-height: none;
`

export const List = ({
  ...props
}) => {
  const { data } = useAllResearchers()
  
  return (
    <Wireframe>
      <Container>
        <MyResearcherList researchers={data} />
      </Container>
    </Wireframe>
  )
}

export default List
