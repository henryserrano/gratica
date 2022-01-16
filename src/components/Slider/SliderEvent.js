import React from 'react'

export const SliderEvent = () => {
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

            <div className=' bg-pink-600 h-96'></div>
            <div className="carousel-caption d-sm-block">
              <h3 className="text-xl font-mono  text-black">Fun Event</h3>
              <p className=" text-center font-mono  text-black mb-6">Fun experiences and stories that tell our journey</p>
              <button className=" invisible bg-transparent font-mono py-4 hover:text-white  px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>

            </div>
          </div>
          <div className="carousel-item">

            <div className=' bg-yellow-600 h-96'></div>
            <div className="carousel-caption  d-sm-block">
              <h3 className="text-xl font-mono    text-black">Enterpreneur Journey</h3>
              <p className="text-sm font-mono  text-black mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>
              <button className=" invisible bg-transparent font-mono py-4 hover:text-white  px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
            </div>
          </div>
          <div className="carousel-item">
            <div className=' bg-yellow-400 h-96'></div>
            <div className="carousel-caption  d-sm-block">
              <h3 className='text-xl font-mono    text-black'>Design Thinking</h3>
              <p className="text-sm font-mono  text-black mb-6">Design Centered line of thoughts that inspire.</p>
              <button className=" invisible bg-transparent font-mono py-4 hover:text-white  px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
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
