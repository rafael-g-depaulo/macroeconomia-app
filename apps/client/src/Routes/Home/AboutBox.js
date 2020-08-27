import React from 'react'

import Box from 'Components/Box'
import Title from 'Components/Title'
import { useAboutUs } from 'Api/aboutUs'
import Markdown from 'Components/Markdown'

import { aboutUs } from "Constants"

export const AboutBox = ({
  ...props
}) => {
  const { data, error } = useAboutUs()
  
  return (
    <Box area="aboutus" {...props}>
      <Title>About Us</Title>
      <Markdown source={ error?.toString() ?? data ?? aboutUs } />
    </Box>
  )
}

export default AboutBox
