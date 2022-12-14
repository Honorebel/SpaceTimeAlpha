/** @format */

import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import UserHeadshot from '../UserHeadshot';

function Profile() {

  const { user } = useAuth();


  console.log(user);
  
  return (
    <div className="w-full h-full border-gray-400 border-2 rounded mb-8 p-3">
      {/* User Info */}
      <div className="w-full flex justify-center items-center flex-col">
        <UserHeadshot />
        <h1 className="font-bold mt-4">{user.displayName}</h1>
        <p className="text-sm text-gray-600 text-center">
          Student at University of San Diego  
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
        <div className="w-full mt-2">
          <div className="flex justify-between items-center">
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

export default Profile;
