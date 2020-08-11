import React from 'react'
import styled, { css } from 'styled-components'

import Link from 'Components/CleanLink'

const border = size => css`
  border-bottom: #FF1D89 ${size} solid;
`

const Item = styled(Link)`
  transition: 0.1s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  ${({ active }) => active && border("2px")}

  &:hover {
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
  ...props
}) => {
  return (
    <Item {...props}>{ children }</Item>
  )
}

export default NavItem
