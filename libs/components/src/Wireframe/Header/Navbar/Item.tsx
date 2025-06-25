import React from 'react'
import styled, { css } from 'styled-components'

import { fontSize, textBlue } from '@styles'

import CleanLink from '@components/CleanLink'

const border = (size: string) => css`
  border-bottom: #ff1d89 ${size} solid;
`

const Item: any = styled(CleanLink)<{ active?: boolean }>`
  transition: 0.1s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${fontSize}px;
  font-weight: 500;
  text-transform: uppercase;

  cursor: pointer;

  &,
  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: ${textBlue};
  }

  ${({ active }) => active && border('2px')}

  &:hover, &:focus {
    ${border('3px')}
    background-color: #e3e4e8;
  }

  &:active {
    ${border('4px')}
    background-color: #d8d9de;
  }
`

export const NavItem = ({
  children,
  active,
  ...props
}: {
  children: any
  active: boolean
  as?: string
  to?: string
} & object) => {
  return (
    <Item {...props} active={active}>
      {children}
    </Item>
  )
}

export default NavItem
