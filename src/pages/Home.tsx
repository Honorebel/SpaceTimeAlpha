/** @format */

import React from "react";
import HomeLeft from "../components/home/LeftBar";
import HomeMiddle from "../components/home/MiddleBar";
import HomeRight from "../components/home/RightBar";
import NavBar from "../components/NavBar";

function Home() {
  
  return (
    <>
      <NavBar />

      <div className="w-full h-[100vh] pt-[8rem] grid md:grid-cols-3 lg:grid-cols-4">

        <HomeLeft />
        <HomeMiddle />
        <HomeRight />

      </div>
    </>
  );
}

export default Home;
