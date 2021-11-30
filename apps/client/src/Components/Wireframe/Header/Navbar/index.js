import React from 'react'
import { useLocation } from 'react-router-dom'

import styled from 'styled-components'
import NavItem from './Item'
import Menu from './Menu'

import { boolProp } from 'Utils/boolProp'

const MyNavbar = styled.nav`
  height: 48px;
  background: #EEEFF5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
  position: relative;

  /* flex */
  display: flex;
  flex-direction: row;
  & > * { flex-grow: 1; }
`

export const Navbar = ({
  ...props
}) => {
  const { pathname } = useLocation()

  return (
    <MyNavbar {...props}>
      <NavItem active={boolProp(pathname === "/researchers")} to="/researchers">researchers</NavItem>
      <NavItem active={boolProp(pathname === "/about-us")} to="/about-us">about us</NavItem>
      <NavItem active={boolProp(pathname === "/dm-bulletins")} to="/dm-bulletins">dm bulletins</NavItem>
      <Menu active={boolProp(["/books", "/papers", "/articles"].includes(pathname))}>papers and books</Menu>
      <NavItem active={boolProp(pathname === "/events")} to="/events">events</NavItem>
      <NavItem active={boolProp(pathname === "/videos")} to="/videos">videos</NavItem>
    </MyNavbar>
  )
}

export default Navbar
