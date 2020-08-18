import React from 'react'
import styled from "styled-components"
import { textBlue, textBlue2, textBlue3 } from 'Themes/default'

const MyLink = styled.a`
  color: ${textBlue};
  
  text-decoration: none;
  
  &:hover, &:focus {
    color: ${textBlue2};
  }
  
  &:active {
    color: ${textBlue3};
  }
`

export const Link = ({
  ...props
}) => {
  return (
    <MyLink
      target="_blank"
      rel="noopener"
      {...props}
    />
  )
}

export default Link
