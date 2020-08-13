import React from 'react'

import Box from 'Components/Box'
import Title from 'Components/Title'
import Text from 'Components/Text'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const AboutBox = ({
  ...props
}) => {
  return (
    <Box>
      <Title>About Us</Title>
      <Text>{ lorem }</Text>
    </Box>
  )
}

export default AboutBox
