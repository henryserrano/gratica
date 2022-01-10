import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Slider } from "../Slider/Slider";

const Home = () => {
    return (
<>
<NavBar/>
<div className="flex items-start ">
        <div className=" w-2/5 py-5   " >
          <img src="https://gratica.net/wp-content/uploads/2021/08/Buho-web-64.gif" />

        </div>
        <div className=" w-2/3  px-7">

          <h1 className="text-6xl  leading-tight text-black mb-8">THINK</h1>
          <h1 className="text-6xl  leading-tight text-black mb-8">INNOVATE</h1>
          <h1 className="text-6xl  leading-tight text-black mb-8">ACCELERATE</h1>
          <p className="text-xl  text-black mb-2">Thinking delivered, ideas created, limits reduced, people empowered, growth enabled.</p>

        </div>

      </div>

      <div className="flex">
        <div className='text-white text-5xl absolute py-40 '>We help businesses create products, gain more customers and improve operations.</div>


        <img className='h-96 w-full' src="https://www.datocms-assets.com/7756/1602283211-untitled-design-2020-10-10t063952-064.png?auto=compress%2Cenhance%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=400&w=1000" />
      </div>

      <div className="flex w-full py-4 ">

        <div className='bg-gradient-to-r border rounded from-orange-400 to-orange-500 w-full flex'>
          <div className=" class w-2/3 bg-orange-500  "  >

            <h1 className="text-4xl  leading-tight text-white ">THINK</h1>

            <p className="text-xl  text-white py-2">Leadership. Product Design.</p>

          </div>

          <div className='bg-orange-500 w-1/3  ' >
            <img className='w-1/3' src='https://gratica.net/wp-content/uploads/2021/07/t-1021x1024.png' />

          </div>
        </div>


      </div>



      <div className="flex w-full py-4 ">

        <div className='bg-gradient-to-r border rounded from-pink-400 to-pink-500 w-full flex'>
          <div className=" class w-2/3 bg-pink-500  "  >

            <h1 className="text-4xl  leading-tight text-white ">INNOVATE</h1>

            <p className="text-xl  text-white py-2">Processes. Deliver results.</p>

          </div>

          <div className='bg-pink-500 w-1/3  ' >
            <img className='w-1/3' src='https://gratica.net/wp-content/uploads/2021/07/i.png' />

          </div>
        </div>

      </div>


      <div className="flex w-full py-4 ">

        <div className='bg-gradient-to-r border rounded from-pink-400 to-pink-500 w-full flex'>
          <div className=" w-2/3 bg-yellow-500  "  >

            <h1 className="text-4xl  leading-tight text-white ">ACCELERATE</h1>

            <p className="text-xl  text-white py-2">Scale. Automate.</p>

          </div>

          <div className='bg-yellow-500 w-1/3  ' >
            <img className='w-1/3 visible ' src='https://gratica.net/wp-content/uploads/2021/07/a-960x1024.png' />

          </div>
        </div>

      </div>
      <Slider/>
      <Footer/>
</>
           
              
      
              
              
          );
      };
      
      export default Home;
 
