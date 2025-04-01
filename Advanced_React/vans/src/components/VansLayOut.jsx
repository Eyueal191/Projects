import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
function VansLayOut() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <header className="flex flex-col w-full h-[10vh] justify-between items-stretch">
        <h1 className="text-[2rem] font-bold mx-auto">
          Explore our vans options
        </h1>
        <nav className="w-full flex flex-row justify-around items-center">
          <button
            onClick={() => navigate("simple")}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              location.pathname.includes("simple")
                ? "bg-orange-600 text-white"
                : "hover:bg-orange-600 hover:text-white"
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => navigate("luxury")}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              location.pathname.includes("luxury")
                ? "bg-orange-600 text-white"
                : "hover:bg-orange-600 hover:text-white"
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => navigate("rugged")}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              location.pathname.includes("rugged")
                ? "bg-orange-600 text-white"
                : "hover:bg-orange-600 hover:text-white"
            }`}
          >
            Rugged
          </button>
          <button
            onClick={() => navigate("/vanslayout")}
            className="px-4 py-2 rounded hover:bg-orange-600 hover:text-white transition-colors duration-300"
          >
            Clear filters
          </button>
        </nav>
      </header>
      <main className="min-h-[65vh] p-4 shadow-sm mt-4 mx-auto w-screen flex justify-center items-center">
        <Outlet key={location.pathname} />
      </main>
    </div>
  );
}

export default VansLayOut;
