/** @format */

import React from "react";
import SpaceTime from "../../components/SpaceTime";

function SelectUsertype() {
  const userTypes = ["ERP", "Commercialization", "Personal Use"];

  const selectUserType = (e:any)=>{
    
  }

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <SpaceTime
          borderThickness="border-[4px]"
          px="px-6"
          py="py-2"
          others="text-[#253dee] border-[#253dee] font-bold text-3xl"
        />
        <h1 className="text-3xl text-[#253dee] font-bold tracking-wider ml-6">
          Hey, let's get started
        </h1>
      </div>
      <h1 className="mt-[100px] text-3xl text-[#253dee] tracking-wide mb-12">
        Select User Type
      </h1>
      {userTypes.map((e) => {
        return (
          <div
            key={e}
            onClick={e => {selectUserType(e.target)}}
            className="py-3 mt-4 bg-gray-300 text-black shadow-md rounded-full px-8 text-xl mb-2 text-center cursor-pointer hover:scale-105 duration-300 ease-in-out"
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}

export default SelectUsertype;
