import React from 'react'

export const Slider = () => {
  return (
    <>
  
       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div className='bg bg-black altura'></div>
            <div className="carousel-caption d-sm-block">
              <h3 className="text-4xl font-mono text-left  text-white mb-8">BRAND DEVELOPMENT</h3>
              <p className=" text-xl font-mono text-left text-gray-300 mb-6">Create powerful visual language that represents your business to your customers. Drive clarity of messaging with marketing brief that alkigns people, customer and outcomes</p>
              <button className=" invisible bg-transparent font-mono py-4 hover:text-white  px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                  <h1 className='sm:py-8 text-white'></h1>
            </div>
          </div>
          <div className="carousel-item">

            <div className='bg bg-black altura'></div>
            <div className="carousel-caption  d-sm-block">
              <h3 className="text-4xl sm:text-5xl  font-mono text-left text-white mb-8">OPERATIONAL CONSULTING</h3>
              <p className="text-xl font-mono text-left text-gray-300 mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>
              <button className=" invisible bg-transparent font-mono sm:py-72  py-4 hover:text-white  px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
              <h1 className='sm:py-8 text-white'></h1>

            </div>
          </div>
          <div className="carousel-item">
            <div className='bg bg-black altura'></div>
            <div className="carousel-caption  d-sm-block">
              <h5 className='text-4xl font-mono text-left'>CUSTOMER AQUISITION PROGRAM</h5>
              <p className='text-xl font-mono text-left' >Innovate program that creates brand new sales channel, delivering results and positive community impact .</p>
              <button class=" invisible bg-transparent font-mono py-5 hover:text-white  px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                  <h1 className='sm:py-8 text-white'></h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
    </>
  )
}
