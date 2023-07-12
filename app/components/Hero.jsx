import React from "react";
import heroSvg from "@/public/images/hero.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section id="hero" className="container">
      <div className="flex flex-col-reverse md:flex-row items-center mx-auto">
        {/* Left section of her */}
        <div
          id="left"
          className="flex flex-col md:w-1/2 mt-10 space-y-10 justify-center items-center md:items-start"
        >
          <h1 className="max-w-md  text-3xl md:text-4xl font-bold text-center md:text-left">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </h1>
          <p className="md:max-w-md text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            error. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius, cum.
          </p>
          <a
            href=""
            className="rounded-full bg-primaryRed p-2 text-white hover:opacity-50 w-36 text-center"
          >
            Get Started
          </a>
        </div>
        {/* right section */}
        <div id="rignt" className="md:w-1/2">
          <Image src={heroSvg} alt="alt" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
