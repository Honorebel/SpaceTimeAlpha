/** @format */

import React from "react";
import SpaceTime from "../../components/SpaceTime";

function SelectSkills() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <SpaceTime
          borderThickness="border-[4px]"
          px="px-6"
          py="py-2"
          others="text-[#253dee] border-[#253dee] font-bold text-3xl"
        />
        <h1 className="text-3xl text-[#253dee] font-bold tracking-wider ml-6">Hey, let's get started</h1>
      </div>
      <div className="">
      <h1 className="text-3xl text-[#253dee] font-bold tracking-wider ml-6">Select Skills</h1>

      </div>
    </div>
  );
}

export default SelectSkills;
