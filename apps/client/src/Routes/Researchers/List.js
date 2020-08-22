import React from 'react'
import styled from 'styled-components'

import { useAllResearchers } from 'Api/researcher'

import ResearcherList from 'Components/ResearcherList'
import LazyPage from 'Components/LazyPage'

const MyResearcherList = styled(ResearcherList)`
  overflow: visible;
  max-height: none;
`

export const List = ({
  ...props
}) => {
  const { data, isLoading } = useAllResearchers()

  return (
    <LazyPage isLoading={isLoading}>
      <MyResearcherList researchers={data} />
    </LazyPage>
  )
}

export default List
