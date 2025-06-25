import styled from 'styled-components'

import { fontSize } from '@styles'

export const Text = styled.p<{ italic?: boolean; bold?: boolean }>`
  font-family: 'Roboto';
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${fontSize}px;
  line-height: 28px;
  text-align: left;
`

export default Text
