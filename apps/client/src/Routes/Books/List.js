import React from 'react'

import { useAllBooks } from 'Api/books'

import useUrl from 'Hooks/useUrl'

import Wireframe from 'Components/Wireframe'
import Container from 'Components/ContentContainer'
import Box from 'Components/Box'
import Link from 'Components/CleanLink'

export const List = ({
  ...props
}) => {
  const { data, isLoading } = useAllBooks()
  const baseUrl = useUrl()

  if (isLoading) return <div>loading...</div>

  return (
    <Wireframe>
      <Container>
        <Box>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {data.map(book => (
            <div>
              {/* <pre>{JSON.stringify(book, null, 2)}</pre> */}
              <Link to={`${baseUrl}/${book.id}`}>view book {book.id}</Link>
            </div>
          ))}
        </Box>
      </Container>
    </Wireframe>
  )
}

export default List
