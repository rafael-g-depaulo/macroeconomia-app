import React, { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'

import { boolProp } from 'Utils/boolProp'

import MaterialMenu from "@material-ui/core/Menu"
import MaterialMenuItem from "@material-ui/core/MenuItem"

import NavItem from "./Item"
import CleanLink from "Components/CleanLink"

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledMenu = styled(MaterialMenu)`
  width: 150px;
`

const Link = styled(CleanLink)`
  color: black;
  &, &:hover, &:active, &:focus, &:visited {
    color: #000;
  }
`

export const Menu = ({
  ...props
}) => {
  
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const toggleMenu = useCallback(overrride => {
    setOpen(open => overrride ?? !open)
  }, [])


  return (
    <NavItem as="div" {...props} active={boolProp(props.active || open)} >
      <Container
        ref={anchorRef}
        onClick={() => toggleMenu()}
        onMouseEnter={() => toggleMenu(true)}
        onMouseLeave={() => toggleMenu(false)}
      >
        <span>Papers and Books</span>
        <StyledMenu
          id="archive-menu"
          anchorEl={anchorRef.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          getContentAnchorEl={null}
          // keepMounted
          open={open}
        >
          <MaterialMenuItem><Link to="/articles">Articles</Link></MaterialMenuItem>
          <MaterialMenuItem><Link to="/papers">Papers</Link></MaterialMenuItem>
          <MaterialMenuItem><Link to="/books">Books</Link></MaterialMenuItem>
        </StyledMenu>
      </Container>
    </NavItem>
  )
}

export default Menu
