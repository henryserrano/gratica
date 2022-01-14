import React from 'react'

export const SliderEvent = () => {
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

            <div className=' bg-pink-600 h-96'></div>
            <div class="carousel-caption d-sm-block">
              <h3 className="text-xl font-serif font-semibold text-black">Fun Event</h3>
              <p className=" text-center  text-black mb-6">Fun experiences and stories that tell our journey</p>

            </div>
          </div>
          <div class="carousel-item">

            <div className=' bg-yellow-600 h-96'></div>
            <div class="carousel-caption  d-sm-block">
              <h3 className="text-xl  font-semibold  text-black">Enterpreneur Journey</h3>
              <p className="text-sm  text-black mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>

            </div>
          </div>
          <div class="carousel-item">
            <div className=' bg-yellow-400 h-96'></div>
            <div class="carousel-caption  d-sm-block">
              <h3 className='text-xl  font-semibold  text-black'>Design Thinking</h3>
              <p className="text-sm  text-black mb-6">Design Centered line of thoughts that inspire.</p>
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
