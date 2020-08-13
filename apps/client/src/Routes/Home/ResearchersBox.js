import React from 'react'

import Box from 'Components/Box'
import Title from 'Components/Title'
import Researcher from 'Components/Researcher'

export const ResearchersBox = ({
  ...props
}) => {
  return (
    <Box>
      <Title>Researchers</Title>
      <div>
        <Researcher
          bio={"Structuralist Development Macroeconomics is defined by Bresser-Pereira, Oreiro and Marconi (2014, p.56) as “the economic theory that explains economic development as a historical process of capital accumulation, incorporating technological progress and structural change, in which accumulation"}
          name="Bianca Bigstone"
          picture="dddd"
        />
      </div>
    </Box>
  )
}

export default ResearchersBox
