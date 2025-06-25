import styled from 'styled-components'

import { strapi, usePageViews } from '@api'

import { textBlue2, fontSize2 } from '@styles'

const Div = styled.div`
  grid-area: counter;

  background: #ffffff;
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
  color: #31965f;
`

export const PageViewCounter = ({ ...props }) => {
  const { data } = usePageViews(strapi)
  const number = data || 1236

  return (
    <Div>
      <Number>{number}</Number>
      <Label>Pessoas acessaram esse site</Label>
    </Div>
  )
}

export default PageViewCounter
