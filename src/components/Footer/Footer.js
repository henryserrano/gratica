import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-800  py-9 md:px-6 md:py-12 lg:px-20 lg:py-12">
           
                       <div className="pt-10 flex flex-col xl:flex-row justify-between">
                <div className="flex flex-col md:gap-10">
                    <div className="flex items-start w-full">
                        <div className="pb-10 md:pb-0">
                        <img class="object-center md:object-top" src="https://gratica.net/wp-content/uploads/elementor/thumbs/Gratica-white-outline-logo-paw6xy962b9ajng29c7pgzpu7le37p9l27n8qgjdwg.png"/>
                           
                        </div>

                        <div className="pb-10 md:pb-0 px-7">
                        
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Services</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Branding consulting</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Customer Adquisitacion Program</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Operational Consulting</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Digital Acceleration Pack</p>
                        </div>

                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-white mb-8">Gratica</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">About us</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-300 mb-6">Getting touch</p>
              
                        </div>
                        
                  
                    </div>
                    
                    
                </div>
                
                
            </div>
        

            <div className="bg-gray-600 w-full absolute left-0 text-gray-50">
                
                © All rights reserved, Gratica 2021  
                <div className="w-full">
                <img class=" align-middle hover:bg-pink-500 align-middle h-8"   src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
                </div> 
                    
              
                </div>
        </div>
        

        
        
    );
};

export default Footer;
