/** @format */

import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />

      <div className="w-full h-[100vh] pt-[8rem] grid md:grid-cols-3 lg:grid-cols-4">
        <div className="w-full bg-green-400 h-full p-4 flex justify-center flex-col">
          <div className="w-full h-[500px] border-gray-500 border-2 rounded mb-8"></div>
          <div className="w-full h-[200px] border-gray-500 border-2 rounded mb-4"></div>
          <div className="w-full h-[250px] border-gray-500 border-2 rounded"></div>
        </div>
        <div className="w-full h-full md:col-span-2  bg-red-400 p-4">
          <div className="w-full h-[250px] border-gray-500 border-2 rounded mb-8"></div>
          <div className="w-full h-[700px] border-gray-500 border-2 rounded"></div>
        </div>
        <div className="w-full h-full hidden lg:block bg-blue-400 p-4">
          <div className="w-full h-[300px] border-gray-500 border-2 rounded mb-8"></div>
          <div className="w-full h-[200px] border-gray-500 border-2 rounded mb-8"></div>
          <div className="w-full h-[200px] border-gray-500 border-2 rounded mb-8"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
