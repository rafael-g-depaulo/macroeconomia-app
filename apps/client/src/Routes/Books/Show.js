import React from 'react'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import Box from 'Components/Box'
import { useBook } from 'Api/books'
import Title from 'Components/Title'
import Text from 'Components/Text'

export const Show = ({
  id,
  ...props
}) => {
  const { data, isLoading } = useBook(id)
  
  if (isLoading) return <div>loading...</div>

  const {
    title,
    // author,
    description,
  } = data

  return (
    <Wireframe>
      <Container>
        <Box maxWidth="900px">
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {/* <Link to=".">back</Link> */}
          <Title>{title}</Title>
          <Text>{description}</Text>
        </Box>
      </Container>
    </Wireframe>
  )
}

export default Show
