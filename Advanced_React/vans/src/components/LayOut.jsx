import React from "react";
import { Outlet, Link } from "react-router-dom";

function LayOut() {
  return (
    <div className="bg-[#FFF7ED] min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-[13vh] flex items-center justify-between border-b-2 border-gray-500 px-6 shadow-md bg-white">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-sm"
          >
            #Vanlife
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-[6vw] text-lg font-medium">
            <li>
              <Link
                to="about"
                className="px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="vanslayout"
                className="px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-sm"
              >
                Vans
              </Link>
            </li>
            <li>
              <Link
                to="host"
                className="px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-sm"
              >
                Host
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex border-2 border-gray-400 text-gray-800 min-h-[75vh] bg-white shadow-md rounded-md mx-4 mt-4 p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="h-[12vh] flex justify-center items-center bg-[#252525] text-white text-2xl font-semibold border-t-2 border-gray-600 shadow-md">
        Ⓒ 2022 #VANLIFE
      </footer>
    </div>
  );
}

export default LayOut;
