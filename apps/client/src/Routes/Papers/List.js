import React from 'react'

import Link from 'Components/CleanLink'

import { useAllPapers } from 'Api/papers'
import useUrl from 'Hooks/useUrl'

export const List = ({
  ...props
}) => {
  const { data, isLoading } = useAllPapers()
  const url = useUrl()

  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <pre>
        { data.map(paper => (
          <div key={paper.id}><Link to={`${url}/${paper.id}`}>{paper.author}</Link></div>
        )) }
      </pre>
    </div>
  )
}

export default List
