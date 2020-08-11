import React from 'react'

import styled from 'styled-components'
import NavItem from './Item'

const MyNavbar = styled.nav`
  height: 48px;
  background: #EEEFF5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);

  /* flex */
  display: flex;
  flex-direction: row;
  & > * { flex-grow: 1; }
`

export const Navbar = ({
  ...props
}) => {
  return (
    <MyNavbar {...props}>
      <NavItem to="/researchers">researchers</NavItem>
      <NavItem>2</NavItem>
      <NavItem>3</NavItem>
      <NavItem>4</NavItem>
    </MyNavbar>
  )
}

export default Navbar
