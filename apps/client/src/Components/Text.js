import styled from "styled-components"

import { fontSize } from "Themes/default"

export const Text = styled.p`  
  font-family: 'Roboto';
  font-style: ${({ italic }) => italic ? "italic" : "normal"};
  font-weight: ${({ bold }) => bold ? "bold" : "normal"};
  font-size: ${fontSize}px;
  line-height: 28px;
  text-align: left;
`

export default Text