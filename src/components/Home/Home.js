import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Slider } from "../Slider/Slider";

const Home = () => {
  return (
    <>



      <div className="sm:flex">
        <div className=" sm:w-2/5 py-5 xs:w-0" >
          <img src="/images/Buho-web-64.gif" />

        </div>
        <div className=" sm:w-3/5 xs:w-full py-5  ">
          <div className='grid place-items-center '>
            <h1 className="text-5xl font-mono md:text-6xl text-black mb-8">THINK</h1>
            <h1 className="text-5xl font-mono  md:text-6xl text-black mb-8">INNOVATE</h1>
            <h1 className="text-5xl font-mono  md:text-6xl text-black mb-8">ACCELERATE</h1>
            <p className="text-xl  text-black mb-2 font-mono">Thinking delivered, ideas created, limits reduced, people empowered, growth enabled.</p>
          </div>
        </div>

      </div>


      <div className="flex py-4">
        <div className='text-white text-center xs:text-3xl  font-mono sm:text-6xl absolute xs:py-12 sm:py-24 md:py-48 '>We help businesses create products, gain more customers and improve operations.</div>


        <img className='xs:h-60 sm:h-96 md:h-[36rem] w-full ' src="/images/teamwork.jpg" />
      </div>



      <div className=" ml-2 mr-2 py-2">

        <div className=' border rounded  w-full flex xs:h-52 sm:h-72'>
          <div className="xs:w-full sm:w-3/5 bg-orange-500 " >
            <h1 className="text-4xl font-mono text-white text-center xs:py-9 sm:py-16">THINK</h1>
            <p className="font-mono text-white text-center">Leadership. Product Design.</p>
          </div>

          <div className='bg-orange-500 sm:w-2/5 xs:w-0' >
            <div className="grid place-items-center xs:h-52 sm:h-72">
              <img className='sm:w-2/5 sm:visible xs:invisible' src='/images/t-1021x1024.png' />
            </div>

          </div>
        </div>


      </div>



      <div className="ml-2 mr-2 py-2 ">

        <div className='border rounded  w-full flex xs:h-52 sm:h-72'>
          <div className="xs:w-full sm:w-3/5 bg-pink-500 "  >

            <h1 className="text-4xl font-mono text-white text-center  xs:py-9 sm:py-16 ">INNOVATE</h1>
            <p className=" font-mono  text-white py-2 text-center">Processes. Deliver results.</p>
          </div>

          <div className='bg-pink-500 sm:w-2/5 xs:w-0' >
          <div className="grid place-items-center xs:h-52 sm:h-72">
            <img className='sm:w-2/5 sm:visible xs:invisible sm:place-items-center' src='/images/i.png' />
          </div>
          </div>
        </div>

      </div>


      <div className="ml-2 mr-2 py-2">

        <div className='bg-gradient-to-r border rounded bg-yellow-500 w-full flex xs:h-52 sm:h-72'>
          <div className="xs:w-full sm:w-3/5 bg-yellow-500  "  >

            <h1 className="text-4xl font-mono text-white xs:text-center  xs:py-9 sm:py-16 ">ACCELERATE</h1>

            <p className=" font:mono text-center text-white py-2">Scale. Automate.</p>

          </div> 

          <div className='bg-yellow-500 sm:w-2/5 xs:w-0' >
          <div className="grid place-items-center xs:h-52 sm:h-72">
            <img className='sm:w-2/5 sm:visible xs:invisible place-items-center' src='/images/a-960x1024.png ' />
          </div>
          </div>
        </div>

      </div>
      <div className="py-3"></div>
      <Slider />
      <Footer />
    </>





  );
};

export default Home;

