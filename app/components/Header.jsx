"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  const [isActiveMobileMenu, setActiveMobileMenu] = useState(false);
  return (
    <div>
      <div className="flex flex-row items-center justify-between container mx-auto py-8 px-4">
        <Logo />
        <Navbar />
        <h2
          className="text-3xl text-primaryRed sm:hidden cursor-pointer"
          onClick={() => setActiveMobileMenu(!isActiveMobileMenu)}
        >
          ☰
        </h2>
      </div>
      <div
        id="mobile-menu"
        className={`${
          isActiveMobileMenu ? "visible" : "hidden"
        } relative  sm:hidden flex justify-center`}
      >
        <div className=" bg-white absolute top-0 w-80 text-center rounded-lg flex flex-col items-center py-8 gap-6 ">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contant</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
