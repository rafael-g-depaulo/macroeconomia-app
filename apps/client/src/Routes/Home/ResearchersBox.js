import React from 'react'

import Box from 'Components/Box'
import Title from 'Components/Title'
import ResearcherList from 'Components/ResearcherList'

import { useAllResearchers } from 'Api/researcher'


export const ResearchersBox = ({
  ...props
}) => {
  const { data } = useAllResearchers()

  return (
    <Box area="researchers">
      <Title>Researchers</Title>
      <ResearcherList researchers={data}/>
    </Box>
  )
}

export default ResearchersBox
