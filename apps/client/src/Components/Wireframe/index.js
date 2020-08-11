import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import Footer from './Footer'
import Navbar from './Navbar'

const Content = styled.main`
  grid-area: content;
`

export const Wireframe = ({
  children,
  ...props
}) => {
  return (
    <Container>
      <Navbar />
      <Content>
        { children }
      </Content>
      <Footer />
    </Container>
  )
}

export default Wireframe
