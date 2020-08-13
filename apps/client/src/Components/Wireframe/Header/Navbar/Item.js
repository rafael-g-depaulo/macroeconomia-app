import React from 'react'
import styled, { css } from 'styled-components'

import { fontSize } from 'Themes/default'

import Link from 'Components/CleanLink'

const border = size => css`
  border-bottom: #FF1D89 ${size} solid;
`

const Item = styled(Link)`
  transition: 0.1s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${fontSize}px;
  font-weight: 500;
  text-transform: uppercase;

  cursor: pointer;

  &, &:hover, &:active, &:focus, &:visited {
    color: #4384D7;
  }

  ${({ active }) => active && border("2px")}

  &:hover, &:focus {
    ${border("3px")}
    background-color: #e3e4e8;
  }

  &:active {
    ${border("4px")}
    background-color: #d8d9de;
  }

`

export const NavItem = ({
  children,
  active,
  ...props
}) => {
  return (
    <Item {...props} active={active} >{ children }</Item>
  )
}

export default NavItem
