import React from 'react'

import { useResearcher } from 'Api/researcher'

import ResearcherCard from './ResearcherCard'
import LazyPage from 'Components/LazyPage'

export const Show = ({
  id,
  ...props
}) => {
  const { data, isLoading } = useResearcher(id)
  
  return (
    <LazyPage isLoading={isLoading}>
      <ResearcherCard data={data} />
    </LazyPage>
  )
}

export default Show
