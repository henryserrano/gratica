import React from 'react'
import Footer from '../Footer/Footer'
import { SliderEvent } from '../Slider/SliderEvent'


export const Evento = () => {
  return (
    <>

      <div className='w-full'>
        <img className='w-full' src='/images/braingym.png' />
      </div>
      <div className='xs:hidden md:grid'>
      <div className='grid place-items-center'>
        <div className='flex percentage-ninety h-96 px-5'>

          <div className="flip-card w-2/6  ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-pink-600 h-96 grid place-items-center' >
                  <h1 className="text-5xl   text-white ">Fun Event</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-pink-600 h-96 grid place-items-center' >
                  <h3 className="text-xl text-white">Fun experiences and stories that tell our journey.</h3>
                </div>
              </div>
            </div>


          </div>

          <div className="flip-card w-2/6 ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-pink-600 h-96 grid place-items-center' >
                  <h1 className="text-5xl leading-tight text-white">Empowering</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-pink-600 h-96 grid place-items-center' >
                  <h3 className="text-xl  leading-tight text-white">Sharing inspiring stories to help all entrepreneurs go forward</h3>
                </div>
              </div>
            </div>


          </div>

          <div className="flip-card w-2/6  ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-pink-600 h-96 grid place-items-center' >
                  <h1 className="text-5xl  text-white mb-8">Branding experiments</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-pink-600 h-96 grid place-items-center' >
                  <h3 className="text-xl text-white ">Experimentation at it's finest. What about animations, interactions, touchpoints?</h3>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
      <br />

      <div className='grid place-items-center'>
        <div className='flex percentage-ninety h-96 px-5'>
          <div className="flip-card w-2/6  ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-yellow-600 h-96 grid place-items-center' >
                  <h1 className="text-5xl   text-white">Growth</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-yellow-600 h-96 grid place-items-center' >
                  <h3 className="text-xl  text-white">Create new channels of communication and value between you and your customers</h3>
                </div>
              </div>
            </div>


          </div>

          <div className="flip-card w-2/6">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-yellow-600 h-96 grid place-items-center' >
                  <h1 className="text-5xl   text-white ">Enterpreneur Journey</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-yellow-600 h-96 grid place-items-center' >
                  <h3 className="text-xl text-white ">Highs and Lows of building a significant brand and interactions.</h3>
                </div>
              </div>
            </div>


          </div>

          <div className="flip-card w-2/6">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-yellow-600 h-96 grid place-items-center' >
                  <h1 className="text-5xl  text-white">New Ideas</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-yellow-600 h-96 grid place-items-center' >
                  <h3 className="text-xl leading-tight text-white ">What is truly innovation? Different ways to create new solutions.</h3>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <br />
      <div className='grid place-items-center'>
        <div className='flex percentage-ninety h-96 px-5 '>

          <div className="flip-card w-2/6 ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-yellow-400 h-96 grid place-items-center' >
                  <h1 className="text-5xl  text-black">Power of connection</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-yellow-400 h-96 grid place-items-center' >
                  <h3 className="text-xl  text-black ">Power of true connections that can be created within having strong messages.</h3>
                </div>
              </div>
            </div>


          </div>


          <div className="flip-card w-2/6 ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-yellow-400 h-96 grid place-items-center' >
                  <h1 className="text-5xl  text-black">New Perspectives</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-yellow-400 h-96 grid place-items-center' >
                  <h3 className="text-xl  text-black mb-8">Thinking outside the box creates new solutions.</h3>
                </div>
              </div>
            </div>


          </div>


          <div className="flip-card w-2/6 ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='bg-yellow-400 h-96 grid place-items-center' >
                  <h1 className="text-5xl text-black mb-8">Design Thinking</h1>
                </div>

              </div>
              <div className="flip-card-back">
                <div className='bg-yellow-400 h-96 grid place-items-center' >
                  <h3 className="text-xl leading-tight text-black mb-8">Design Centered line of thoughts that inspire</h3>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
      </div>
      <br />
      <div className='lg:hidden md:hidden '>
        <SliderEvent />
        <br/>
      </div>


      <div className='bg-gray-400 lg:h-96 xs:h-auto sm:flex '>

        <div className='xs:w-full lg:w-2/6' >
          <div className='bg-pink-600 h-52   px-5' >
            <h1 className="text-3xl cursor-default font-semibold leading-tight text-white mb-8">Event's info</h1>
            <h3 className="text-xl leading-tight text-white mb-8">September 2021</h3>
            <h6 className=" leading-tight text-white mb-8">infodesk@gratica.net</h6>
          </div>
        </div>

        <div className='xs:w-full  '>
        <form class=" w-flex">
        <h1 className='text-black text-6xl text-center py-2' >Book Brain Gym</h1>
        
          <div className='xs:w-full '>
          <input className="bg-gray-200  rounded  py-2   " id="name" type="text" placeholder='Name' />
          <input class="bg-gray-200 rounded  py-2 px-4 border-gray-200 w-3/6 text-gray-700  focus:bg-white " id="inline-password" type="email" placeholder="Email" />
          </div>
      
     
          <div class="w-full">

            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white " id="inline-password" type="text" placeholder="Company name" />
          </div>
          <br />
          <div class="w-full">
            <button class="shadow w-full bg-slate-900 hover:bg-pink-600 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded" type="button">
              book now
            </button>
          </div>
          
        </form>
        </div>
      </div>
      <Footer />

    </>
  )
}

