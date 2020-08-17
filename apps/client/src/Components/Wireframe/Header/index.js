import React from 'react'
import styled from 'styled-components'

import Banner from './Banner'
import Navbar from './Navbar'

const MyHeader = styled.header`
  grid-area: header;
  background: pink;
  min-height: 25px;

  display: flex;
  flex-direction: column;
`

export const Header = ({
  ...props
}) => {
  return (
    <MyHeader>
      <Banner />
      <Navbar />
    </MyHeader>
  )
}

export default Header
