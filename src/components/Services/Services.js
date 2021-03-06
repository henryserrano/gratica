import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Services = () => {
  return (
    <>

      <div className=' grid place-items-center '>
        <div className='xs:w-full  md:w-5/6 lg:w-5/6 '>


          <div className="sm:flex ">
            <div className="sm:w-full lg:w-3/6   " >
              <img src="/images/Buho-web-64.gif" />

            </div>
            <div className=' sm:w-full lg:w-3/6 '>
              <div className=' w-2/6 xs:w-full grid place-items-center h-auto'>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="3000">
                    <div className='bg-white h-auto grid place-items-center'>
                      <h1 className='text-black text-5xl text-center font-normal sm:font-mono md:py-48 py-28'>Think </h1>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className='bg-white h-auto'>
                      <h1 className='text-black text-5xl font-family:"AdamBold" text-center py-28 md:py-48'>Accelerate </h1>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className='bg-white h-auto'>
                      <h1 className='text-black text-5xl font-mono text-center py-28 md:py-48'>Innovate </h1>
                    </div>
                  </div>

                </div>
              </div>
              </div>
            </div>

          </div>



          <div className="sm:flex ">
            <div className=" sm:w-full lg:w-3/6 ">
              <h1 className="xs:text-3xl xs:text-center xs:font-mono md:text-4xl px-3 sm:font-mono lg:font-mono md:font-mono  text-black ">BRAND DEVELOPMENT</h1>
              <p className=" xs:text-base px-3 text-xl md:text-lg  text-black font-mono ">Using Design Thinking strategies we will help you create a truly unique and compelling customer centric messaging.
                By understanding the needs and goals of the company, we help you create a marketing and technical brief. This empowering process delivers clarity of messaging, objectives and ultimately delivers a specification for innovation.</p>

            </div>
            <div className="sm:w-full lg:w-3/6  py-5 " >
              <img src="/images/Branding-Consulting-1024x683.png" />

            </div>

          </div>

          <div className='col-xs-12'>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">

                  <div className=' bg-pink-600 h-96'></div>
                  <div className="carousel-caption  d-sm-block">
                    <h3 className="text-3xl  font-mono  text-white ">MARKETING BRIEF</h3>
                    <p className="  text-white font-mono mb-6">Create powerful visual language that represents your business to your customers. Drive clarity of messaging with marketing brief that alkigns people, customer and outcomes</p>
                    <Link to="/contact">
                  <button className="bg-transparent font-mono  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
                  </div>
                </div>
                <div className="carousel-item">

                  <div className=' bg-orange-500 h-96'></div>
                  <div className="carousel-caption  d-sm-block">
                    <h3 className="text-3xl   font-mono  text-white mb-8">DIGITAL ASSETS</h3>
                    <p className="text-sm font-mono text-white mb-6">Improve culture and talent retention, add resilence, create lasting organisational change, setting up for long term growth.</p>
                    <Link to="/contact">
                  <button className="bg-transparent font-mono   hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className=' bg-orange-500 h-96'></div>
                  <div className="carousel-caption  d-block ">
                    <h3 className="text-3xl text-center font-mono    text-white mb-8">PROJECT MANAGEMENT</h3>
                    <p className='font-mono text-white'>Innovate program that creates brand new sales channel, delivering results and positive community impact .</p>
                    <Link to="/contact">
                  <button className="bg-transparent  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>



          <div className="sm:flex   ">
            <div className="sm:w-full lg:w-3/6" >
              <img src="/images/Customer-aquisition-mockup-1024x691.png" />

            </div>
            <div className=" sm:w-full lg:w-3/6  ">
              <h1 className="text-3xl text-center font-mono   text-black mb-8">CUSTOMER ACQUISITION PROGRAM</h1>
             
                <ul className=''>
               <li className='font-mono md:text-lg'> -We help businesses</li>
               <li className='font-mono  md:text-lg'> -Run unique digital events</li>
               <li className='font-mono  md:text-lg'>-Attract more customers</li>
               <li className='font-mono  md:text-lg'>-Create SME content</li>
               <li className='font-mono  md:text-lg'>-Increase market visibility</li>
                </ul>
              

            </div>

          </div>


          <div className=''>
            <div id="carouselExamples" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="1" aria-label="Slide 2"></button>

              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">

                  <div className='bg bg-yellow-400 h-96'></div>
                  <div className="carousel-caption  d-sm-block">
                    <h3 className="text-3xl font-mono text-black   mb-8">CUSTOMER JOURNEYS</h3>
                    <p className=" font-mono text-black mb-6">We create engaging new customer journeys promoting your brand.</p>
                    <Link to="/contact">
                  <button className="bg-transparent font-mono hover:text-white text-black py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
                  </div>
                </div>
                <div className="carousel-item">

                  <div className='bg bg-yellow-300 h-96'></div>
                  <div className="carousel-caption d-sm-block">
                    <h3 className="text-3xl font-mono text-black mb-8">DIGITAL CONTENT CREATION</h3>
                    <p className="text-sm font-mono leading-none text-black mb-6">We use customer values to create engaging experiences that promote your brand.</p>
                    <Link to="/contact">
                  <button className="bg-transparent font-mono text-black   hover:text-black py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
                  </div>
                </div>
          
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExamples" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExamples" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>




          <div className="sm:flex">
            <div className="sm:w-full lg:w-3/6">
              <h1 className="xs:text-3xl xs:text-center sm:text-2xl font-mono   text-black mb-2">OPERATIONAL CONSULTING</h1>
              <p className="sm:text-sm md:text-lg  text-black font-mono">Operational Consulting is all about growth.  Leaders often get challenged by external environment and it gets lonely at the top.  Critical feedback is hard to solicit and operational elements can suffer.</p>
            <br/>
                <p className="sm:text-sm md:text-lg   text-black font-mono">Our consultation is unbiased, raw and gives direct insight into road blocks, show stoppers along with processes and mental models to shift gears and overcome difficult situations. </p>

            </div>
            <div className="sm:w-full lg:w-3/6"   >
              <img src="/images/Operations-1024x717.png" />

            </div>


          </div>








          <div className=''>
            <div id="carouselExamp" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExamp" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExamp" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExamp" data-bs-slide-to="2" aria-label="Slide 3"></button>

              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">

                  <div className='bg bg-orange-500 h-96'></div>
                  <div className="carousel-caption  d-sm-block">
                    <h3 className="text-3xl font-mono text-white mb-8">EMPOWER PEOPLE</h3>
                    <p className="text-sm font-mono  text-white mb-6">Creating High Performance culture and delivering tools and process for execution</p>
                    <Link to="/contact">
                  <button className="bg-transparent font-mono hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>

                  </div>
                </div>
                <div className="carousel-item">

                  <div className='bg bg-orange-400 h-96'></div>
                  <div className="carousel-caption d d-sm-block">
                    <h3 className="text-3xl font-mono text-white mb-8">ROADMAP WORKSHOPS</h3>
                    <p className="text-sm xs:text-lg font-mono text-white mb-6">Roadmapping and founder workshops.</p>
                    <Link to="/contact">
                  <button className="bg-transparent font-mono  hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>

                  </div>
                </div>
                <div className="carousel-item">
                  <div className='bg bg-orange-300 h-96'></div>
                  <div className="carousel-caption  d-sm-block">
                    <h3 className="text-3xl font-mono  text-white mb-8">RESEARCH PEOPLE</h3>
                    <p className='font-mono'>Insights from industry thought leaders.</p>
                    <Link to="/contact">
                  <button className="bg-transparent font-mono hover:text-white py-2 px-4 border  hover:border-transparent rounded-full">
                    CONTACT US
                  </button>
                </Link>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExamp" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExamp" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
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
