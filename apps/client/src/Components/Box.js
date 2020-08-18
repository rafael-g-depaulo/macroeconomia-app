import styled, { css } from "styled-components"

export const Box = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 100%;

  padding: 25px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 0 auto;

  height: fit-content;

  ${({ area }) => !!area && css`grid-area: ${area};`}

  ${({ maxWidth }) => !!maxWidth && css`max-width: ${maxWidth};`}
`

export default Box
