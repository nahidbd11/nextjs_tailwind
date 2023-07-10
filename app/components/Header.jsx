import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
