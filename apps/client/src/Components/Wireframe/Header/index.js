import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const MyHeader = styled.header`
  grid-area: header;
  background: pink;
  min-height: 25px;
`

export const Header = ({
  ...props
}) => {
  return (
    <MyHeader>
      <Navbar />
    </MyHeader>
  )
}

export default Header
