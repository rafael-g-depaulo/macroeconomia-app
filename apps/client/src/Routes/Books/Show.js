import React from 'react'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import Box from 'Components/Box'

export const Show = ({
  id,
  ...props
}) => {
  return (
    <Wireframe>
      <Container>
        <Box>
          {id}
        </Box>
      </Container>
    </Wireframe>
  )
}

export default Show
