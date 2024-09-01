import React from 'react'

const Label = ({name}:{name:string}) => {
  return (
    <div className="font-semibold text-base py-2 text-left block">
    <label>{name}</label>
  </div>
  )
}

export default Label