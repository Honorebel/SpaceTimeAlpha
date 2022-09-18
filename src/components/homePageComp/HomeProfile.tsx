/** @format */

import React from "react";
import DummyHeadshot from "../DummyHeadshot";

function HomeProfile() {
  return (
    <div className="w-full h-[400px] border-gray-400 border-2 rounded mb-8 p-3">
      {/* User Info */}
      <div className="w-full h-[50%] flex justify-center items-center flex-col">
        <DummyHeadshot display={false} size="w-[6rem]" />
        <h1 className="font-bold mt-4">Anthony Thomas</h1>
        <p className="text-sm text-gray-600 text-center">
          Founder of Diving Clothing and Fashion Designer
        </p>
      </div>

      {/* Founded Spaces */}
      <div className="w-full relative h-[50%]">
        <h1 className="font-bold mt-4">Founded Spaces</h1>
        {/* Horizontal Blocks Display */}
        <div className="w-full flex py-2 space-x-2 overflow-hidden">
          <div>
            <div className="w-[50px] h-[50px] bg-red-500 rounded-lg"></div>
            <p className="text-xs italic text-gray-600">Project 1</p>
          </div>
          <div>
            <div className="w-[50px] h-[50px] bg-green-500 rounded-lg"></div>
            <p className="text-xs italic text-gray-600">Project 2</p>
          </div>
          <div>
            <div className="w-[50px] h-[50px] bg-blue-500 rounded-lg"></div>
            <p className="text-xs italic text-gray-600">Project 3</p>
          </div>
          <div>
            <div className="w-[50px] h-[50px] bg-purple-500 rounded-lg"></div>
            <p className="text-xs italic text-gray-600">Project 4</p>
          </div>
        </div>

        {/* Views & Followers */}
        <div className="absolute bottom-6 w-full">
          <div className="relative flex justify-between items-center">
              <p className="text-sm text-gray-600">Who's viewed your profile</p>
              <p className="text-sm text-[#253dee] italic">89</p>
          </div>
          <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">Followers</p>
              <p className="text-sm text-[#253dee] italic">327</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProfile;
