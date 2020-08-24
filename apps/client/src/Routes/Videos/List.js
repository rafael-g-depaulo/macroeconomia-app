import React from 'react'

import { useAllVideos } from 'Api/video'

import Box from 'Components/Box'
import LazyPage from 'Components/LazyPage'
import Loading from 'Components/Loading'

export const List = ({
  ...props
}) => {
  const { data, isLoading, error } = useAllVideos()

  return (
    <LazyPage isLoading={isLoading || error} fallback={<Box><Loading /></Box>}>
      <Box>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </LazyPage>
  )
}

export default List
