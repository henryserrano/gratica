import React from "react";
import Footer from "../Footer/Footer";
import { Slider } from "../Slider/Slider";

const Home = () => {
  return (
    <>



      <div className="flex items-start ">
        <div className=" md:w-0 lg:w-2/5  py-5 sm:w-0    " >
          <img src="/images/Buho-web-64.gif" />

        </div>
        <div className=" lg:w-3/5 md:w-full sm:w-full py-5  ">
          <div className='grid place-items-center '>
            <h1 className="text-6xl   text-black mb-8">THINK</h1>
            <h1 className="text-6xl   text-black mb-8">INNOVATE</h1>
            <h1 className="text-6xl   text-black mb-8">ACCELERATE</h1>
            <p className="text-xl  text-black mb-2">Thinking delivered, ideas created, limits reduced, people empowered, growth enabled.</p>
          </div>
        </div>

      </div>
      <div class="moving-mouse-holder">
  <div class="mouse">
    <div class="mouse-button">&nbsp;</div>
  </div>
 
</div>

      <div className="flex">
        <div className='text-white text-5xl absolute py-40 '>We help businesses create products, gain more customers and improve operations.</div>


        <img className='h-96 w-full' src="/images/teamwork.png" />
      </div>



      <div className="flex w-full py-4  ">

        <div className='bg-gradient-to-r border rounded  from-orange-400 to-orange-500 w-full flex h-72'>
          <div className=" class w-3/5 bg-orange-500  "  >

            <h1 className="text-4xl  leading-tight text-white  ">THINK</h1>

            <p className="text-xl  text-white py-2">Leadership. Product Design.</p>

          </div>
      
          <div className='bg-orange-500 w-1/3  ' >
            <div className="">
            <img className='w-2/5'  src='/images/t-1021x1024.png' />
            </div>
            
          </div>
        </div>


      </div>



      <div className="flex w-full py-4 ">

        <div className='bg-gradient-to-r border rounded from-pink-400 to-pink-500 w-full flex h-72'>
          <div className=" class w-3/5 bg-pink-500  "  >

            <h1 className="text-4xl  leading-tight text-white ">INNOVATE</h1>
            <p className="text-xl  text-white py-2">Processes. Deliver results.</p>
          </div>

          <div className='bg-pink-500 w-2/5  ' >
            <img className='w-1/3' src='/images/i.png' />

          </div>
        </div>

      </div>


      <div className="flex w-full py-4 ">

        <div className='bg-gradient-to-r border rounded bg-yellow-500 w-full flex h-72'>
          <div className=" w-3/5 bg-yellow-500 px-3  "  >

            <h1 className="text-4xl  leading-tight text-white ">ACCELERATE</h1>

            <p className="text-xl  text-white py-2">Scale. Automate.</p>

          </div>

          <div className='bg-yellow-500 w-1/3  ' >
            <img className='w-2/5 visible ' src='/images/a-960x1024.png ' />

          </div>
        </div>

      </div>
      <Slider />
      <Footer />
    </>





  );
};

export default Home;

