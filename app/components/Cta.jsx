import React from "react";

const Cta = () => {
  return (
    <section className="bg-primaryRed w-screen mt-16 py-6 flex">
      <div className="container mx-auto px-6 md:px-16 py-5   text-white flex flex-col md:justify-between md:flex-row items-center gap-5 ">
        <h2 className="sm:text-4xl text-2xl md:max-w-xl sm:text-center">
          Lorem, ipsum dolor.
        </h2>
        <a
          href=""
          className="rounded-full bg-white px-2 py-2 text-primaryRed hover:opacity-50"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Cta;
