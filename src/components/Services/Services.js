import React from 'react';
import PropTypes from 'prop-types';
import { AppRouter } from '../../routers/AppRouter';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Services = () => {
  return (
    <>
      <NavBar />
      <div className='grid place-items-center '>
        <div className='w-4/6 '  >
          <div className="flex w-4/6">
            <div className=" w-3/6 md:w-full py-5   " >
              <img src="https://gratica.net/wp-content/uploads/2021/08/Buho-web-64.gif" />

            </div>
            <div className=' w-2/6 grid place-items-center'>
              <h1 className="text-5xl text-black">THINK</h1>
            </div>

          </div>


          <div className="flex w-full ">
            <div className=" class w-3/6  px-7">
              <h1 className="text-4xl   text-black mb-8">BRAIN DEVELOPMENT</h1>
              <p className="text-xl text-justify  text-black ">Using Design Thinking strategies we will help you create a truly unique and compelling customer centric messaging.
                By understanding the needs and goals of the company, we help you create a marketing and technical brief. This empowering process delivers clarity of messaging, objectives and ultimately delivers a specification for innovation.</p>

            </div>
            <div className=" class w-3/6 py-5   " >
              <img src="https://gratica.net/wp-content/uploads/2021/07/Branding-Consulting-1024x683.png" />

            </div>

          </div>


          <div className='w-full'>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">

                  <div className='bg bg-pink-600 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">MARKETING BRIEF</h3>
                    <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Create powerful visual language that represents your business to your customers. Drive clarity of messaging with marketing brief that alkigns people, customer and outcomes</p>

                  </div>
                </div>
                <div class="carousel-item">

                  <div className='bg bg-orange-500 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">DIGITAL ASSETS</h3>
                    <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>

                  </div>
                </div>
                <div class="carousel-item">
                  <div className='bg bg-orange-500 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">PROJECT MANAGEMENT</h3>
                    <p>Innovate program that creates brand new sales channel, delivering results and positive community impact .</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>



          <div className="flex w-full ">
            <div className=" class w-3/6 py-5   " >
              <img src="https://gratica.net/wp-content/uploads/2021/07/Customer-aquisition-mockup-1024x691.png" />

            </div>
            <div className=" class w-3/6 grid place-items-center  ">
              <h1 className="text-4xl   text-black mb-8">CUSTOMER ACQUISITION PROGRAM</h1>
              <p className="text-xl  text-black mb-2">We help businesses

                -Run unique digital events
              </p>

            </div>

          </div>


          <div className='w-full'>
            <div id="carouselExamples" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="1" aria-label="Slide 2"></button>

              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">

                  <div className='bg bg-yellow-500 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">MARKETING BRIEF</h3>
                    <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Create powerful visual language that represents your business to your customers. Drive clarity of messaging with marketing brief that alkigns people, customer and outcomes</p>

                  </div>
                </div>
                <div class="carousel-item">

                  <div className='bg bg-yellow-500 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">DIGITAL ASSETS</h3>
                    <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>

                  </div>
                </div>
                <div class="carousel-item">
                  <div className='bg bg-orange-500 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">PROJECT MANAGEMENT</h3>
                    <p>Innovate program that creates brand new sales channel, delivering results and positive community impact .</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamples" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExamples" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>




          <div className="flex w-full">
            <div className=" class w-3/6  px-7">
              <h1 className="text-4xl  leading-tight text-black mb-8">OPERATIONAL CONSULTING</h1>
              <p className="text-xl text-justify text-black mb-2">Operational Consulting is all about growth.  Leaders often get challenged by external environment and it gets lonely at the top.  Critical feedback is hard to solicit and operational elements can suffer.

                Our consultation is unbiased, raw and gives direct insight into road blocks, show stoppers along with processes and mental models to shift gears and overcome difficult situations. </p>

            </div>
            <div className=" class w-3/6 py-5   " >
              <img src="https://gratica.net/wp-content/uploads/2021/07/Operations-1024x717.png" />

            </div>


          </div>



          <div className='w-full'>
            <div id="carouselExamp" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExamp" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExamp" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExamp" data-bs-slide-to="1" aria-label="Slide 3"></button>

              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">

                  <div className='bg bg-orange-500 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">MARKETING BRIEF</h3>
                    <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Create powerful visual language that represents your business to your customers. Drive clarity of messaging with marketing brief that alkigns people, customer and outcomes</p>

                  </div>
                </div>
                <div class="carousel-item">

                  <div className='bg bg-orange-400 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">DIGITAL ASSETS</h3>
                    <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>

                  </div>
                </div>
                <div class="carousel-item">
                  <div className='bg bg-orange-300 h-96'></div>
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">PROJECT MANAGEMENT</h3>
                    <p>Innovate program that creates brand new sales channel, delivering results and positive community impact .</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamp" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExamp" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>





        </div>
       

      </div>
      <Footer />





    </>


  );
};


export default Services;
