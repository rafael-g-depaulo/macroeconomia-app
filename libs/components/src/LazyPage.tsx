import React, { FC, ReactElement, Suspense } from 'react'

import Container from '@components/ContentContainer'
import Wireframe from '@components/Wireframe'
import Loading from '@components/Loading'

export const LazyPage: FC<{
  isLoading?: boolean
  fallback?: ReactElement
  children?: ReactElement | ReactElement[] | string
}> = ({ isLoading = false, fallback = <Loading />, children }) => {
  return (
    <Wireframe>
      <Container>
        <Suspense fallback={fallback}>
          {isLoading ? fallback : children}
        </Suspense>
      </Container>
    </Wireframe>
  )
}

export default LazyPage
