import React from 'react'

const Header = ({title}:{title:string}) => {
  return (
    <h1 id='app-header' className='text-4xl p-5'>{title}</h1>
  )
}

export default Header