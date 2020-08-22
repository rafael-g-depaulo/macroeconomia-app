import React, { Suspense } from 'react'

import Container from 'Components/ContentContainer'
import Wireframe from 'Components/Wireframe'
import Loading from 'Components/Loading'

export const LazyPage = ({
  isLoading,
  fallback = <Loading />,
  children,
  ...props
}) => {
  return (
    <Wireframe>
      <Container>
        <Suspense fallback={fallback}>
          { isLoading ? fallback : children }
        </Suspense>
      </Container>
    </Wireframe>
  )
}

export default LazyPage
