import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'


export const About = () => {
  return (
    <>



      <div className='grid place-items-center '>
        <div className='xs:w-full  md:w-5/6 lg:w-5/6 '>


          <div className="sm:flex ">
            <div className="xs:w-full sm:w-full w-3/6 full py-5 xs:grid place-items-center  " >
              <img src="/images/download.png" />

            </div>
            <div className="xs:w-full w-3/6 full px-7">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2500">
                    <div className='bg-white h-96'>
                      <h1 className='text-black text-5xl font-mono text-center py-28'>THINK BEYOND </h1>
                      <p className='text-center font-mono'>Go further thah the conventional thoughts.</p>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2500">
                    <div className='bg-white h-80'>
                      <h1 className='text-black font-mono text-5xl text-center py-28'>GET INSPIRED </h1>
                      <p className='text-center font-mono'>Let's create something.</p>
                    </div> 
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2 className='text-pink-600 xs:text-4xl lg:text-6xl font-mono  text-center'>OUR PROJECTS</h2>
      <br />
      <br />


      <div className='flex w-full h-72'>
        <div className="flip-card w-full  ">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className=' w-full h-72 backgr-pink place-items-center ' >
                <img className='mx-auto' src='/images/eyes.png ' />
                <h1 className="text-3xl   font-mono text-white ">DIGITAL EVENT FOR CUSTOMER ACQUISITION</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='backgr-pink h-72  grid place-items-center' >
                <h3 className="text-xl font-mono  text-white ">Customised leadership workshop. Empowered executives to drive outcomes through research and best practice mechanisms.</h3>

                <Link to="/contact">
                  <button class="bg-transparent font-mono  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='flex w-full h-72'>
        <div className="flip-card w-full ">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="backgr-yellow  w-full h-72" >
                <img className='mx-auto' src='/images/thinking.png ' />
                <h1 className="text-3xl font-mono  text-white ">DOCUMENT PROCESSING AUTOMATION</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='backgr-yellow h-72 grid place-items-center' >
                <h3 className="text-xl font-mono   text-white mb-8">We created an automated invoice processing capability that increased staff productivity and agility. This was an effective way to help scale growing businesses by reducing operational overhead on staff.</h3>
                <Link to="/contact">
                  <button class="bg-transparent font-mono  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='flex w-full h-72'>
        <div className="flip-card w-full ">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="backgr-orange  w-full h-72" >
                <img className='mx-auto' src='/images/arrow.png ' />
                <h1 className="text-3xl font-mono  text-white ">LEADERS WORKSHOP</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='backgr-orange h-72 grid place-items-center' >
                <h3 className="text-xl font-mono  text-white mb-8">Workshop focused on creating a roadmap for business leaders to help them create mechanism for scaling their time and grow their business.</h3>
                <Link to="/contact">
                  <button class="bg-transparent font-mono  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className='flex w-full h-72'>
        <div className="flip-card w-full ">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="backgr-rosa  w-full h-72" >
                <img className='mx-auto' src='/images/pen.png' />
                <h1 className="text-3xl font-mono  text-white ">BRANDING AND DIGITAL DEVELOPMENT</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='backgr-rosa h-72 grid place-items-center' >
                <h3 className="text-xl font-mono   text-white mb-8">We created a journey for businesses to understand their brand creation through an immersive experience using design thinking principles.</h3>
                <Link to="/contact">
                  <button class="bg-transparent font-mono  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>

  )
}
