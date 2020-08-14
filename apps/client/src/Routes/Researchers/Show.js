import React from 'react'

export const Show = ({
  id,
  ...props
}) => {
  console.log(props)
  return (
    <div>Show researcher with id: {id}</div>
  )
}

export default Show
