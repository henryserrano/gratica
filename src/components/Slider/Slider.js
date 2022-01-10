import React from 'react'

export const Slider = () => {
  return (
    <>
       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">

            <div className='bg bg-black h-96'></div>
            <div class="carousel-caption d-none d-sm-block">
              <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">BRAND DEVELOPMENT</h3>
              <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Create powerful visual language that represents your business to your customers. Drive clarity of messaging with marketing brief that alkigns people, customer and outcomes</p>

            </div>
          </div>
          <div class="carousel-item">

            <div className='bg bg-black h-96'></div>
            <div class="carousel-caption d-none d-sm-block">
              <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">OPERATIONAL CONSULTING</h3>
              <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>

            </div>
          </div>
          <div class="carousel-item">
            <div className='bg bg-black h-96'></div>
            <div class="carousel-caption d-none d-sm-block">
              <h5>CUSTOMER AQUISITION PROGRAM</h5>
              <p>Innovate program that creates brand new sales channel, delivering results and positive community impact .</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
