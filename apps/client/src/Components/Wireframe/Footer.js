import React from 'react'
import styled from 'styled-components'

const MyFooter = styled.footer`
  height: 30px;
  background: #31965F;
  grid-area: "footer";
`

export const Footer = ({
  ...props
}) => {
  return (
    <MyFooter {...props}/>
  )
}

export default Footer
