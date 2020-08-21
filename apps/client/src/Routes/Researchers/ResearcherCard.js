import React from 'react'
import styled from 'styled-components'
import Title from 'Components/Title'
import Markdown from 'Components/Markdown'

const Card = styled.div`

  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  padding: 35px 15px;

  display: grid;
  grid-gap: 35px;
  grid-template-areas: "picture-area divider bio";
  grid-template-columns: minmax(150px, 3fr) 2px 4fr;

  width: 80%;
  margin: auto;
`

const Divider = styled.div`
  background: #31965F;
  width: 100%;
  height: 100%;
  grid-area: divider;
`

const Picture = styled.img`
  width: auto;
  max-width: 100%;
  margin: auto;
`

const PictureArea = styled.div`
  grid-area: picture-area;
  display: flex;
`

const BioArea = styled.div`
  grid-area: bio;
`

const MyTitle = styled(Title)`
`

export const ResearcherCard = ({
  data,
  ...props
}) => {
  console.log(data)
  const {
    Picture: img,
    Bio,
    Name,
  } = data

  return (
    <Card>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <PictureArea>
        <Picture src={img.url} />
      </PictureArea>
      <Divider />
      <BioArea>
        <MyTitle>{Name}</MyTitle>
        <Markdown
          source={Bio}
        />
      </BioArea>
    </Card>
  )
}

export default ResearcherCard
