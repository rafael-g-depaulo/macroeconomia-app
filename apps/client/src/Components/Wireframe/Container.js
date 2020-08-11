import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-height: 100vh;

  display: grid;
  grid:
    "navbar" auto
    "content" minmax(auto, 1fr)
    "footer" auto
  ;
`

export default Container
