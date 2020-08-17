import React from 'react'
import styled from 'styled-components'
import Title from 'Components/Title'

const Card = styled.div`

  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: grid;
  grid-gap: 35px;
  grid-template-areas: "picture-area divider bio";
  grid-template-columns: minmax(150px, 3fr) 2px 4fr;

  height: 90%;
  max-height: 900px;
`

const Divider = styled.div`
  background: #31965F;
  width: 100%;
  height: 100%;
  grid-area: divider;
`

const PictureArea = styled.div`
  grid-area: picture-area;
  background: purple;
`

const BioArea = styled.div`
  grid-area: bio;
  background: blue;
`

const MyTitle = styled(Title)`
`

export const ResearcherCard = ({
  data,
  ...props
}) => {
  return (
    <Card>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <PictureArea />
      <Divider />
      <BioArea>
        <MyTitle>{data.name}</MyTitle>
      </BioArea>
    </Card>
  )
}

export default ResearcherCard
