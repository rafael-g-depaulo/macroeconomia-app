import React from 'react'
import styled from 'styled-components'

const MyHeader = styled.header`
  grid-area: header;
  background: pink;
  height: 25px;
`

export const Header = ({
  ...props
}) => {
  return (
    <MyHeader>
      
    </MyHeader>
  )
}

export default Header
