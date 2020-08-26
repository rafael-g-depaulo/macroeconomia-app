import React from 'react'
import styled from 'styled-components'

import Link from 'Components/CleanLink'

import BannerUrl from './Banner_@3x.png'

const MyLink = styled(Link)`
  /* needed for some reason */
  margin-bottom: -4px;
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 35vh;
  object-position: center 0;
`

export const Banner = ({
  ...props
}) => {
  return (
    <MyLink to="/">
      <Img
        src={BannerUrl}
      />
    </MyLink>
  )
}

export default Banner
