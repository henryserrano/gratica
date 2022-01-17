import React from 'react'
import Footer from '../Footer/Footer'

export const NotFound = () => {
  return (
    <>
      <div className='relative' >
        <div className="  absolute h:auto xs:top-1/4 md:top-1/2 lg:top-1/2 sm:top-1/3 w-full">
          <h1 className=' text-white xs:text-3xl sm:text-6xl   md:text-7xl text-center font-mono'>ARE YOU LOST?</h1>
          <h3 className='text-white text-2xl text-center sm:text-3xl  md:text-3xl    font-mono'>The page were looking for couldn't be found</h3>
    
        </div>
        <div>
       
            <img className='w-full xs:h-auto sm:h-auto '  src='/images/notfound.png ' />

          </div>
        
      </div>
      <Footer />
    </>
  )
}
