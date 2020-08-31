import React from 'react'
import styled from 'styled-components'

import { usePageViews } from 'Api/viewCounter'

import { textBlue2, fontSize2 } from 'Themes/default'

const Div = styled.div`
  grid-area: counter;

  background: #FFFFFF;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);

  padding: 10px;
  border-radius: 4px 4px 0 0;

  position: absolute;
  bottom: -50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  * + * {
    margin-top: 5px;
  }
`

const Number = styled.span`
  font-size: ${fontSize2}px;
  color: ${textBlue2};
`

const Label = styled.span`
  color: #31965F;
`

export const PageViewCounter = ({
  ...props
}) => {

  const { data } = usePageViews()
  const number = data || 12

  return (
    <Div>
      <Number>{number}</Number>
      <Label>Pessoas acessaram esse site</Label>
    </Div>
  )
}

export default PageViewCounter
