import React from 'react'
import styled from 'styled-components'

const MyImage = styled.img`
  margin: 15px auto;
  max-width: 100%;
`

const ImageContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
`

export const Image = ({
  ...props
}) => {
  return (
    <ImageContainer>
      <MyImage
        {...props}
      />
    </ImageContainer>
  )
}

export default Image
