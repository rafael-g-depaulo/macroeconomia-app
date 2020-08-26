import React from 'react'
import styled from 'styled-components'

import { useFacebook, useInstagram } from 'Api/socialMedia'

import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

import Link from 'Components/Link'
import { footerGreen, footerGreen2 } from 'Themes/default'

const List = styled.div`
  display: flex;
  flex-direction: row;

  > * + * {
    margin-left: 20px;
  }
`

const iconSize = 40
const Icon = styled.div`
  width: ${iconSize}px;
  height: ${iconSize}px;

  font-size: ${iconSize - 10}px;

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
    <Link href={to}>
      <Icon>{ children }</Icon>
    </Link>
  )
}

export const SocialMedia = ({
  ...props
}) => {

  const { data: fb_data } = useFacebook()
  const { data: ig_data } = useInstagram()

  const fbLink = fb_data ?? "https://www.facebook.com/macrododesenvolvimento"
  const igLink = ig_data ?? "https://www.instagram.com/macro_est_desenvolvimento/"

  return (
    <List>
      <Item to={fbLink}><FacebookIcon fontSize="inherit"/></Item>
      <Item to={igLink}><InstagramIcon fontSize="inherit"/></Item>
    </List>
  )
}

export default SocialMedia
