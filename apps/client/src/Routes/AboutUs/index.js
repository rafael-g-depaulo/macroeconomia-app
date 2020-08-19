import React from 'react'

import Container from 'Components/ContentContainer'
import Wireframe from 'Components/Wireframe'
import AboutBox from 'Routes/Home/AboutBox'

export const AboutUs = ({}) => {
  
  return (
    <Wireframe>
      <Container>
        <AboutBox maxWidth="900px"/>
      </Container>
    </Wireframe>
  )
}

export default AboutUs
