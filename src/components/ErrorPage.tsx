import React from 'react'
import Header from './ui/Header'

const ErrorPage = () => {
  return (
    <div className='flex flex-col gap-2 items-center' >
     <Header title={'An error has occured.'}/>
      <p className='text-l font-semibold'>Please try again.</p>
  </div>
  )
}

export default ErrorPage