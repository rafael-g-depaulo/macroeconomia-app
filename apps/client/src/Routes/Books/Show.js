import React from 'react'

import { useBook } from 'Api/books'

import Box from 'Components/Box'
import Title from 'Components/Title'
import Markdown from 'Components/Markdown'
import Loading from 'Components/Loading'
import LazyPage from 'Components/LazyPage'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const Show = ({
  id,
  ...props
}) => {
  const { data, error, isLoading } = useBook(id)
  
  const {
    title,
    // author,
    description,
  } = data ?? {}

  return (
    <LazyPage isLoading={isLoading} fallback={<Box maxWidth="900px"><Loading /></Box>}>
      <Box maxWidth="900px">
        <Title>{title}</Title>
        <Markdown source={ error?.toString() ?? description ?? lorem } />
      </Box>
    </LazyPage>
  )
}

export default Show
