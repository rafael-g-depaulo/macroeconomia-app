import React from 'react'
import styled from 'styled-components'

import Researcher from './Researcher'

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  
  > *:not(:last-child) {
    margin-bottom: 15px;
  }

  max-height: 900px;
  overflow-y: scroll;
`

export const ResearcherList = ({
  researchers = [],
  ...props
}) => {
  return (
    <List {...props}>
      { researchers.map(({ id, Name, Bio, Picture }, i) =>
        <Researcher
          key={id + i}
          id={id}
          name={Name}
          bio={Bio}
          picture={Picture.url}
        />
      )}
    </List>
  )
}

export default ResearcherList
