import React from 'react'

import { usePaper } from 'Api/papers'

import Link from 'Components/CleanLink'

export const Show = ({
  id,
  ...props
}) => {
  const { data } = usePaper(id)
  return (
    <div>
      <Link to=".">back</Link>
      <pre>
        { JSON.stringify(data, null, 2) }
      </pre>
    </div>
  )
}

export default Show
