import React from "react";
import { useLoaderData } from "react-router-dom";

function LuxuryVans() {
  let vans = useLoaderData();

  if (!vans) {
    return (
      <div className="text-center text-gray-600 text-lg border border-gray-300 rounded-lg p-6 shadow-md">
        Loading luxury vans...
      </div>
    );
  }

  if (vans.length === 0) {
    return (
      <div className="text-center text-gray-600 text-lg border border-gray-300 rounded-lg p-6 shadow-md">
        No luxury Vans Available
      </div>
    );
  }

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white p-6 rounded-lg w-[90%] shadow-lg">
      {vans.map((van) => (
        <li
          key={van.id}
          className="bg-white shadow-md rounded-lg overflow-hidden h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 flex flex-col justify-between space-y-4 border border-gray-200"
        >
          <figure className="flex flex-col space-y-2 border-b border-gray-300">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-full h-52 object-cover object-center"
              loading="lazy"
            />
            <figcaption className="text-black font-semibold text-xl px-4 py-2 border-t border-gray-300 bg-gray-50 rounded-b-lg">
              {van.name}
            </figcaption>
          </figure>
          <div className="px-6 py-4 border-t border-gray-300 min-h-[130px] bg-gray-50 rounded-b-lg">
            <h1 className="text-md text-gray-600 uppercase tracking-wider font-medium border-b border-gray-300 pb-1">
              {van.type}
            </h1>
            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
              {van.description}
            </p>
          </div>
          <div className="px-6 pb-4 bg-white rounded-b-lg">
            <button className="w-full py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium text-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-500 hover:border-orange-600 shadow-md">
              Pay ${van.price}/day
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LuxuryVans;
