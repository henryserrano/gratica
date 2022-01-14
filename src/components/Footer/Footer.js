import React from "react";
import { NavLink, Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-gray-800  py-9  md:py-12  lg:py-12">
           
                       <div className="pt-10 flex flex-col xl:flex-row justify-between">
                <div className="flex flex-col md:gap-10">
                    <div className="flex items-start w-full">
                        <div className="pb-10 md:pb-0">
                        <img className="object-center md:object-top" src="/images/graticalogo.png"/>
                           
                        </div>

                        <div className="pb-10 md:pb-0 px-7">
                        
                         
                            <h3><Link className="text-xl  font-semibold text-white mb-8" to="/services">Services</Link></h3>
                            <p><Link to="/services" className="text-sm hover:text-gray-300  text-gray-300 mb-6">Branding Consulting</Link></p>
                            <p><Link to="/services" className="text-sm  text-gray-300 mb-6 hover:text-gray-300">Customer Adquisitacion Program</Link></p>
                            <p><Link to="/services" className="text-sm  text-gray-300 mb-6 hover:text-gray-300">Operational Consulting</Link></p>
                            <p><Link to="/services" className="text-sm  text-gray-300 mb-6 hover:text-gray-300">Digital Acceleration Pack</Link></p>
                           
                        </div>

                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16">
                            <h3 className="text-xl cursor-default font-semibold  text-white mb-8">Gratica</h3>
                            <p> <Link to="/about" className="text-sm  text-gray-300 mb-6 hover:text-gray-300">About us</Link></p>
                            <Link to="/contact" className="text-sm  text-gray-300 mb-6 hover:text-gray-300">Getting touch</Link>
                            
              
                        </div>
                    </div>
                </div>             
                
            </div>
        

            <div className="bg-gray-600  absolute  text-gray-50 flex w-full">
                <p className="percentage-ninety">© All rights reserved, Gratica 2021 </p>

                <img className="percentage-ten hover:bg-pink-500 h-8 "   src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
                </div> 

        </div>
        

        
        
    );
};

export default Footer;
