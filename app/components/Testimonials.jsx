import Image from "next/image";
import React from "react";
import avatar from "@/public/images/avatar.png";
const Testimonials = () => {
  return (
    <section id="testimonials" className="text-center mt-32">
      <h2 class="text-3xl font-bold ">What's Different About Manage?</h2>
      <div className="flex flex-col md:flex-row  text-center  gap-5 min-w-screen mt-16">
        <ItemTestimonial />
        <ItemTestimonial />
        <ItemTestimonial />
      </div>
    </section>
  );
};

export default Testimonials;

const ItemTestimonial = () => {
  return (
    <div className="flex flex-col bg-white items-center md:w-1/3 p-3  rounded-lg shadow-lg hover:shadow-xl transition-all delay-75 ease-in-out space-y-3  ">
      <div className="rounded-lg -mt-12">
        <Image src={avatar} />
      </div>
      <h5 class="text-lg font-bold">Anisha Li</h5>
      <p class="text-sm pb-6">
        “Manage has supercharged our team’s workflow. The ability to maintain
        visibility on larger milestones at all times keeps everyone motivated.”
      </p>
    </div>
  );
};
