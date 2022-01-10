import React from "react";
import { NavLink } from 'react-router-dom'

const NavBar=()=>{
    return (
    
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 bg-gradient-to-r from-pink-500 to-yellow-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          
        
        <NavLink to="/" className=""><img src="/images/graticalogo.png"/></NavLink>
        
          
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" >
          <div class="text-sm lg:flex-grow text-black mr-6">
          

            <NavLink to="/event" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-pink-300 font-semibold mr-4">Events</NavLink>
            <NavLink to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-pink-300 font-semibold mr-4">Services</NavLink>
            <NavLink to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-pink-300 font-semibold mr-4">About us</NavLink>
            
          </div>
          
        </div>
      </nav>
      )
}

export default NavBar