import { useAllBulletins } from 'Api/dm-bulletins'
import React from 'react'

export const Events = ({
}) => {
  const { data, error } = useAllBulletins()

  return (
    <div>
      <pre>Data: {JSON.stringify(data, null, 2)}</pre>
      <pre>Error: {JSON.stringify(error, null, 2)}</pre>
    </div>
  )
}

export default Events
