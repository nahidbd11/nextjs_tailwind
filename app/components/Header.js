import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import logo from "../../public/images/logo.png";
const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <Image src={logo} alt="Picture of the author" width={50} height={50} />
      <Navbar />

    </div>
  );
};

export default Header;
