import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'


export const About = () => {
  return (
    <>
      <NavBar />
      <div className='grid place-items-center '>
        <div className='w-4/6 flex items-center'>
          <div className=" w-3/6 full py-5" >
            <img src="/images/download.png" />

          </div>
          <div className=" w-3/6 full px-7">
            <h1 className="text-5xl items-center  text-black text-center mb-8">THINK BEYOND</h1>
            <p className=" leading-none text-black ">Go further than the conventional thoughts</p>
          </div>
        </div>
      </div>
      <h1 className='text-pink-600 text-6xl text-center'>OUR PROJECTS</h1>
      <br />
      <br />


      <div className='flex w-full h-72'>
        <div className="flip-card w-full  ">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className='bg-pink-600 w-full h-72 grid place-items-center ' >

                <h1 className="text-3xl  font-semibold text-white ">DIGITAL EVENT FOR CUSTOMER ACQUISITION</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='bg-pink-600 h-72  grid place-items-center' >
                <h3 className="text-xl cursor-default font-semibold text-white ">Customised leadership workshop. Empowered executives to drive outcomes through research and best practice mechanisms.</h3>

                <Link to="/contact">
                  <button class="bg-transparent  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    Contact us
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
              <div className='bg-yellow-600 grid place-items-center h-72' >
                <h1 className="text-3xl cursor-default font-semibold leading-tight text-white ">DOCUMENT PROCESSING AUTOMATION</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='bg-yellow-600 h-72 grid place-items-center' >
                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">We created an automated invoice processing capability that increased staff productivity and agility. This was an effective way to help scale growing businesses by reducing operational overhead on staff.</h3>
                <Link to="/contact">
                  <button class="bg-transparent  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    Contact us
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
              <div className='bg-orange-600 grid place-items-center h-72' >
                <h1 className="text-3xl cursor-default font-semibold leading-tight text-white ">LEADERS WORKSHOP</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='bg-orange-600 h-72 grid place-items-center' >
                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Workshop focused on creating a roadmap for business leaders to help them create mechanism for scaling their time and grow their business.</h3>
                <Link to="/contact">
                  <button class="bg-transparent  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    Contact us
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
              <div className='bg-pink-600 grid place-items-center h-72' >
                <h1 className="text-3xl cursor-default font-semibold leading-tight text-white ">BRANDING AND DIGITAL DEVELOPMENT</h1>
              </div>

            </div>
            <div className="flip-card-back">
              <div className='bg-pink-600 h-72 grid place-items-center' >
                <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">We created a journey for businesses to understand their brand creation through an immersive experience using design thinking principles.</h3>
                <Link to="/contact">
                  <button class="bg-transparent  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    Contact us
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
