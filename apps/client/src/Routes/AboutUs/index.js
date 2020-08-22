import React, { lazy } from 'react'

import LazyPage from 'Components/LazyPage'

const AboutBox = lazy(() => import('Routes/Home/AboutBox'))

export const AboutUs = ({
  ...props
}) => {
  
  return (
    <LazyPage>
      <AboutBox maxWidth="900px"/>
    </LazyPage>
  )
}

export default AboutUs
