import React from 'react'

import Box from '@components/Box'
import Title from '@components/Title'
import { useAboutUs } from '@api/strapiRoutes/aboutUs'
import Markdown from '@components/Markdown'

import { aboutUs } from '@styles'
import { strapi } from '@api'

export const AboutBox = ({ ...props }) => {
  const { data, error } = useAboutUs(strapi)

  return (
    <Box area="aboutus" {...props}>
      <Title>About Us</Title>
      <Markdown source={error?.toString() ?? data ?? aboutUs} />
    </Box>
  )
}

export default AboutBox
