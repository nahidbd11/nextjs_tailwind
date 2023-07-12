import React from "react";
import Logo from "./Logo";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-[#0a0a0a] w-screen  text-white  flex flex-col  justify-center  px-10 py-5 ">
      <div className="flex flex-col items-center justify-center sm:flex-row-reverse  sm:justify-between sm:items-start px-10 py-5 ">
        <div className="flex flex-col  items-center py-4 sm:flex-row sm:items-start  space-y-8 sm:space-y-0">
          <div className="columns-2 space-x-3 sm:space-x-1 md:space-x-10 mr-2">
            <ul className="list-none capitalize space-y-2">
              <li>home</li>
              <li>product</li>
              <li>About</li>
              <li>contact</li>
            </ul>
            <ul className="list-none capitalize space-y-2">
              <li>pricing</li>
              <li>services</li>
              <li>projects</li>
              <li>blogs</li>
            </ul>
          </div>
          <div className="flex gap-x-2 px-4 justify-center">
            <input
              className="rounded-full focus:outline-none   text-center text-black py-2 "
              placeholder="enter your email"
            />
            <button className="bg-primaryRed rounded-full px-4 py-2">Go</button>
          </div>
        </div>
        {/* logo and social links */}
        <div className="flex flex-col items-center space-y-8">
          <div id="logo" className="flex  items-center space-x-4">
            <Logo /> <h2 className="text-2xl sm:text-lg  text-white">Nahid</h2>
          </div>
          <div id="social-links" className="flex  items-center space-x-5 ">
            <BsFacebook size={25} className="hover:text-primaryRed" />
            <BsWhatsapp size={25} className="hover:text-primaryRed" />
            <BsTwitter size={25} className="hover:text-primaryRed" />
          </div>
        </div>
      </div>
      <h2 className="italic font-serif text-xs p-4 text-center">
        Copy right &copy;2023
      </h2>
    </div>
  );
};

export default Footer;
