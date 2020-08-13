import React from 'react'

export const Researcher = ({
  name,
  picture,
  bio,
  ...props
}) => {
  return (
    <div>
      <h5>{name}</h5>
      <img src={picture}/>
      <p>{bio}</p>
    </div>
  )
}

export default Researcher
