import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex flex-row space-x-6 items-center">
      <a href="" className="hover:text-red-900">
        Home
      </a>
      <a href="" className=" hover:text-red-900">
        Contact
      </a>
      <a href="" className=" hover:text-red-900">
        About
      </a>
      <a href="" className=" hover:text-red-900">
        Pricing
      </a>
      <a href="" className="rounded-full bg-[#FD581C] p-2 text-white">
        Get Started
      </a>
    </nav>
  );
};

export default Navbar;
