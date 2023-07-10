import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
const Logo = () => (
  <Image src={logo} alt="Picture of the author" width={50} height={50} />
);

export default Logo;
