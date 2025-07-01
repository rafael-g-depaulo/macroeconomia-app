import React from 'react'
import styled from 'styled-components'

import { useResearchers } from '@api/strapiRoutes/researcher'

import ResearcherList from '@components/ResearcherList'
import LazyPage from '@components/LazyPage'
import { strapi } from '@api'

const MyResearcherList = styled(ResearcherList)`
  overflow: visible;
  max-height: none;
`

export const Component = () => {
  const { data, isLoading } = useResearchers(strapi)

  return (
    <LazyPage isLoading={isLoading}>
      <MyResearcherList researchers={data as any} />
    </LazyPage>
  )
}

export default Component
