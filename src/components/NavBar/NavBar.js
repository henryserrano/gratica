import React from "react";
import { NavLink ,Link} from "react-router-dom";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    

    
 
    <div className=" flex items-center justify-between flex-wrap bg-teal-500 bg-gradient-to-r from-pink-500 to-yellow-500 p-6">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <div className="flex items-center flex-shrink-0 text-white ">
        <Link  to="/"><img className="px-16 h-16" src="/images/graticalogo.png" alt="logo" /></Link>
      </div>
   
        <button className="lg:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white "
        type="button"
          onClick={() => setNavbarOpen(!navbarOpen)
          }>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          
          </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item ">
          <Link   to="/event" className="block mt-4 lg:inline-block font-mono text-2xl lg:mt-0 text-black-200 hover:text-pink-600  mr-6" onClick={() => setNavbarOpen(!navbarOpen)
          }>Events</Link>
            <Link to="/services"className="block mt-4 lg:inline-block font-mono text-2xl lg:mt-0 text-black-200 hover:text-pink-600  mr-6" onClick={() => setNavbarOpen(!navbarOpen)
          }>Services</Link>
            <Link to="/about" className="block mt-4 lg:inline-block font-mono text-2xl  lg:mt-0 text-black-200 hover:text-pink-600  mr-6" onClick={() => setNavbarOpen(!navbarOpen)
          }>About us</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>


   
  
  )
}

export default NavBar