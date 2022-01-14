import React from 'react'

import Footer from '../Footer/Footer'

export const Contact = () => {
  return (
    <>
  
      
        <div className='w-full'>
          <h1 className="text-6xl text-white absolute text-center">GET IN TOUCH</h1>

          <img className='w-full h-64' src='https://www.ryangroup.org/public/images/front_end/header-images/connect_1604410548.jpg' />
        </div>

      

      <div className=" bg-gray-200 flex w-full h-96">
        <div className="  w-3/6 grid place-items-center md:w-full " >
          <h1 className="text-6xl text-pink-600  text-center">LET'S CHAT, FOR REAL</h1>
          
          <p className='text-black px-7'>Let’s talk about your business.  Let’s think, innovate and accelerate together.
            Thank you 🙂
            PS. This form does NOT subscribe you to any newsletters or automated marketing material. </p>

        </div>
        <div className=" w-3/6  px-7">


          <form className="w-full">

            <div className="w-full ">
              <label className="block text-gray-900 font-bold text-2xl py-2 " for="inline-full-name">Name</label>
              <input className="bg-gray-50 w-full   h-14  py-2 px-4 text-gray-700 leading-tight " id="name" type="text" placeholder='Name' />
              <label className="block text-gray-900 font-bold text-2xl py-2" for="inline-mail">Email</label>
              <input className="bg-gray-50 w-full h-14  py-2 px-4 border-gray-200  text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-password" type="email" placeholder="Email" />
              <label className="block text-gray-900 font-bold text-2xl py-2" for="inline-full-name">How can we help you?</label>
              <select className="block appearance-none w-full h-14 bg-gray-50  border-gray-200 text-gray-700 py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>BRAND DEVELOPMENT</option>
                <option>CUSTOMER ACQUISITION PROGRAM</option>
                <option>OPERATIONAL CONSULTING</option>
              </select>
            </div>


            <div className="w-full">
              <button className="shadow  w-2/6 bg-slate-900 hover:bg-pink-600  text-white py-2  rounded" type="button">
                Send
              </button>
            </div>

          </form>



        </div>

      </div>

      <div className='bg-pink-600 flex w-full h-96'>
        <div className=" class w-3/6" >
          <h1 className="text-3xl text-white py-24 text-center">WE ARE HIRING</h1>
          <p className='text-white px-9'>– Creative professionals who can focus on animation.</p>
          <p className='text-white px-9'>– Technology professionals focusing on programming.</p>
        </div>
        <div className=" class w-3/6" >
          <h1 className="text-3xl text-white py-24  text-center">TRABAJA CON NOSOTROS</h1>
          <p className='text-white px-9'>– Profesionales creativos enfocados en animacion.</p>
          <p className='text-white px-9'>– Profesionales en tecnología enfocados en programación</p>
        </div>
      </div>
      <Footer/>

    </>
  )
}
