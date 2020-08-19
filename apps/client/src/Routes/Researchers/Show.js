import React from 'react'

import { useResearcher } from 'Api/researcher'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import ResearcherCard from './ResearcherCard'

export const Show = ({
  id,
  ...props
}) => {
  const { data, isLoading } = useResearcher(id)
  
  if (isLoading) return <div>loading...</div>

  return (
    <Wireframe>
      <Container>
        { !isLoading && <ResearcherCard data={data} /> }
      </Container>
    </Wireframe>
  )
}

export default Show
