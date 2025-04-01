import React from "react";
import image from "../assets/image 55.png";

function About() {
  return (
    <div className="w-full h-auto">
      <figure className="w-full h-auto">
        <img
          src={image}
          alt="Van lifestyle scene"
          className="w-full object-fit"
        />
        <figcaption className="text-[2rem] text-black mt-4 mx-auto my-4 max-w-2xl text-center">
          Don’t squeeze in a sedan when you could relax in a van.
        </figcaption>
      </figure>
      <p className="max-w-2xl mx-auto my-4 text-lg text-gray-700">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉) Our team is
        full of vanlife enthusiasts who know firsthand the magic of touring the
        world on 4 wheels.
      </p>
      <section
        className="w-[490px] h-[198px] border-2 border-black mx-auto my-4 rounded-xl flex flex-col justify-around items-center"
        style={{ backgroundColor: "#FFCC8D" }}
      >
        <h1 className="w-[420px] height-[60px] text-bold text-[1.4rem] font-monospace">
          Your destination is waiting. Your van is ready.
        </h1>
        <button className="bg-[#161616] text-white text-[1.5rem] rounded-lg p-4 self-start ms-[25px]">
          Explore out vans
        </button>
      </section>
    </div>
  );
}

export default About;
