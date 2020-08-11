import React from 'react'
import styled from 'styled-components'

const MyNavbar = styled.nav`
  grid-area: navbar;
  background: pink;
  height: 25px;
`

export const Navbar = ({
  ...props
}) => {
  return (
    <MyNavbar>
      
    </MyNavbar>
  )
}

export default Navbar
