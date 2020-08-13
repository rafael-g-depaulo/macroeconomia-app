import React from 'react'
import Researcher from './Researcher'

export const ResearcherList = ({
  researchers = [],
  ...props
}) => {
  return (
    <div>
      { researchers
        .map(researcher => <Researcher data={researcher} />)
      }
    </div>
  )
}

export default ResearcherList
