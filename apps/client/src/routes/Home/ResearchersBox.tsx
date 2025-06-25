import React from 'react'

import Box from '@components/Box'
import Title from '@components/Title'
import ResearcherList, { researcher } from '@components/ResearcherList'

import { useResearchers } from '@api/strapiRoutes/researcher'
import { strapi } from '@api'

export const ResearchersBox = ({ ...props }) => {
  const { data } = useResearchers(strapi)

  return (
    <Box area="researchers">
      <Title>Researchers</Title>
      <ResearcherList researchers={data as any as researcher[]} />
    </Box>
  )
}

export default ResearchersBox
