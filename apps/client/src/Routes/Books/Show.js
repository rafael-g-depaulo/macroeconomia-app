import React, { useEffect, useState } from 'react'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import Box from 'Components/Box'
import { useBook } from 'Api/books'
import Link from 'Components/CleanLink'

export const Show = ({
  id,
  ...props
}) => {
  const { data, isLoading } = useBook(id)
  
  if (isLoading) return <div>loading...</div>

  return (
    <Wireframe>
      <Container>
        <Box>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Link to=".">back</Link>
        </Box>
      </Container>
    </Wireframe>
  )
}

export default Show
