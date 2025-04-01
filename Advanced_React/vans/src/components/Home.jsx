import React from "react";
import image from "../assets/image 53.png";

function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center w-full h-[100%]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <article className="flex flex-col justify-between items-center w-[494.33px] h-[256.13px]">
        <h1 className="text-[2rem] text-white text-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="border-2 rounded-lg w-[100%] h-[50px] text-white text-center leading-[50px] bg-[#FF8C38]">
          Find Your Van
        </button>
      </article>
    </div>
  );
}

export default Home;
