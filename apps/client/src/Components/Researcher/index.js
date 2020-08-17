import React from 'react'
import styled from 'styled-components'

import { lineHeight } from 'Themes/default'

import Text from 'Components/Text'
import Title from 'Components/Title'
import CleanLink from "Components/CleanLink"
import ReadMore from './ReadMore'

const height = 160

const MyText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${lineHeight*2}px;
  line-height: ${lineHeight}px; 
  margin: 0;
`

const MyTitle = styled(Title)`
  text-align: left;
  margin: 10px 0;
  font-size: 24px;
  
  overflow: hidden;
  max-height: 28px;

`

const Content = styled.div`
  grid-area: content;
  overflow: hidden;
`

const Grid = styled.div`
  display: grid;
  height: ${height}px;
  max-width: 600px;
  grid:
    "picture content" / 150px 1fr
  ;
  grid-gap: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const Picture = styled.img`
  grid-area: picture;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  /* height: auto; */
  max-height: ${height}px;
`

const Divider = styled.hr`
`

export const Researcher = ({
  id,
  name,
  picture,
  bio,
  ...props
}) => {
  const path = `/researchers/${id}`
  return (
    <Grid>
      <Picture src={picture}/>
      <Content>
        <CleanLink to={path}><MyTitle as="h4">{name}</MyTitle></CleanLink>
        <MyText>{bio}</MyText>
        <Divider />
        <ReadMore to={path}/>
      </Content>
    </Grid>
  )
}

export default Researcher
