/** @format */

import React from "react";
import HomeLeft from "../components/homePageComp/HomeLeft";
import HomeMiddle from "../components/homePageComp/HomeMiddle";
import HomeRight from "../components/homePageComp/HomeRight";
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
