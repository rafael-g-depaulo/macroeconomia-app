import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'

import CleanLink from '@components/CleanLink'

import { textBlue4 } from '@styles'

const MyButton = styled(Button)`
  color: ${textBlue4};
`

export const ReadMore = ({ to, ...props }: { to: string }) => {
  return (
    <CleanLink to={to}>
      <MyButton size="small" color="primary" {...props}>
        Read More
      </MyButton>
    </CleanLink>
  )
}

export default ReadMore
