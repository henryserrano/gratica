import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="sm:flex backgr-footer xs:h-auto sm:h-96 xs:py-14  ">
                <div className=" xs:w-full sm:w-2/6 px-7">
                    <img className="" src="/images/graticalogo.png" />
                    <div className="xs:py-3">
                    <img className="h-4 w-4 absolute" src="/images/icons8-mail.png " />
                        <a className="text-white px-4 font-mono  " href="mailto:infodesk@gratica.net">infodesk@gratica.net
                        </a>
                    </div>
                </div>
                <div className="flex flex-col xs:w-full sm:flex-row sm:w-4/6 xs:py-14" >
                    <div className="xs:pb-10 sm:pb-40 xs:px-7">


                        <h3><Link className="text-xl font-mono text-white mb-8" to="/services">SERVICES</Link></h3>
                        <br />
                        <p><Link to="/services" className=" font-mono hover:text-gray-300  text-gray-300 mb-6">Branding Consulting</Link></p>
                        <p><Link to="/services" className=" font-mono text-gray-300 mb-6 hover:text-gray-300">Customer Adquisitacion Program</Link></p>
                        <p><Link to="/services" className=" font-mono text-gray-300 mb-6 hover:text-gray-300">Operational Consulting</Link></p>
                        <p><Link to="/services" className="font-mono text-gray-300 mb-6 hover:text-gray-300">Digital Acceleration Pack</Link></p>

                    </div>
                    <div className="xs:pb-10 sm:pb-40 xs:px-7">
                        <h3 className="text-xl font-mono  text-white mb-8">GRATICA</h3>

                        <p> <Link to="/about" className=" font-mono  text-gray-300 mb-6 hover:text-gray-300">About us</Link></p>
                        <Link to="/contact" className=" font-mono text-gray-300 mb-6 hover:text-gray-300">Getting touch</Link>


                    </div>

                </div>





            </div>
            <div className="bg-gray-600  absolute  text-gray-50 flex w-full">
                <p className="percentage-ninety xs:text-center font-mono">© All rights reserved, Gratica 2021 </p>

                <img className="sm:percentage-ten hover:bg-pink-500 xs:h-8 xs:place-items-center " src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
            </div>
        </div>





    );
};

export default Footer;
