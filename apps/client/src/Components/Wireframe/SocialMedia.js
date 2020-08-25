import React from 'react'
import styled from 'styled-components'

import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

import CleanLink from 'Components/CleanLink'
import { footerGreen, footerGreen2 } from 'Themes/default'

const List = styled.div`
  display: flex;
  flex-direction: row;

  > * + * {
    margin-left: 15px;
  }
`

const Icon = styled.div`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: ${footerGreen2};
  color: ${footerGreen};
`

export const Item = ({
  to,
  children,
  ...props
}) => {
  return (
    <CleanLink href={to}>
      <Icon>{ children }</Icon>
    </CleanLink>
  )
}

export const SocialMedia = ({
  ...props
}) => {
  const fbLink = ""
  const igLink = ""

  return (
    <List>
      <Item to={fbLink}><FacebookIcon fontSize="small"/></Item>
      <Item to={igLink}><InstagramIcon fontSize="small"/></Item>
    </List>
  )
}

export default SocialMedia
