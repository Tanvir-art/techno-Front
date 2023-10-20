import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center iteams-center'>
        <div>
        <h2 className='text-4xl font-bold pt-20'>There is a Error</h2>
      <Link to='/'>
      <p className='pt-6 pb-20'>Go Home</p>
      </Link>
        </div>

    </div>
  )
}

export default Error
