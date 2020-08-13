import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'

import CleanLink from "Components/CleanLink"

import { textBlue4 } from 'Themes/default'

const MyButton = styled(Button)`
  color: ${textBlue4};
`

export const ReadMore = ({
  to,
  ...props
}) => {
  return (
    <CleanLink to={to}>
      <MyButton
        size="small"
        color="primary"
        {...props}
        >
        Read More
      </MyButton>
    </CleanLink>
  )
}

export default ReadMore
