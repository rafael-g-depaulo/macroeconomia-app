import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import Footer from './Footer'
import Header from './Header'

const Content = styled.main`
  grid-area: content;
  display: flex;
`

export const Wireframe = ({
  children,
  ...props
}) => {
  return (
    <Container>
      <Header />
      <Content>
        { children }
      </Content>
      <Footer />
    </Container>
  )
}

export default Wireframe
