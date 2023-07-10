import React from 'react'

const Cta = () => {
  return (
    <section className='bg-primaryRed w-screen mt-16 p-6 text-center'>
    <div className='container mx-auto sm:px-16 h-40  text-white flex flex-col justify-between md:flex-row items-center '>
      <h2 className='text-4xl md:max-w-xl text-center'>Lorem, ipsum dolor.</h2>
      <a
        href=""
        className="rounded-full bg-white p-2 text-primaryRed hover:opacity-50"
      >
        Get Started
      </a>
    </div>
    </section>

  )
}

export default Cta