import React from 'react'
import Footer from '../Footer/Footer'

export const NotFound = () => {
  return (
    <>
    <div>
    <div className="grid place-items-center absolute">
      <h1 className=' text-white text-5xl    text-center font-mono'>ARE YOU LOST?</h1>
      <h3 className='text-white text-2xl    font-mono'>The page were looking for couldn't be found</h3>
      </div>
      <div>
      <div className='xs:h-auto sm:auto md:h-72 lg:h-96  '>
    <img className=' w-full '  src='/images/notfound.png '/>
    </div>
    </div>
    </div>
      <Footer/>
    </>
  )
}
