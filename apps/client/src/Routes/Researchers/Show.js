import React from 'react'

import { useResearcher } from 'Api/researcher'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import ResearcherCard from './ResearcherCard'
import Loading from 'Components/Loading'

export const Show = ({
  id,
  ...props
}) => {
  const { data, isLoading } = useResearcher(id)
  
  if (isLoading) return <Loading />

  return (
    <Wireframe>
      <Container>
        { !isLoading && <ResearcherCard data={data} /> }
      </Container>
    </Wireframe>
  )
}

export default Show
