/** @format */

import React from "react";

function MyIdeas() {
  return (
    <div className="w-full h-full border-gray-400 border-2 rounded mb-4 p-3">
      <div className="w-full">
        <h1 className="font-bold mt-2 text-lg">My ideas</h1>
        {/* Horizontal Blocks Display */}
        <div className="w-full h-full flex py-2 space-x-2 mt-2 overflow-hidden">
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
        {/* New Collaborator */}
        <div className="w-full p-1 m-auto bg-gray-300 rounded-lg flex items-center mt-2">
          <div className="w-[50px] h-[50px] min-w-[50px] bg-[#AAC4FF] rounded-lg"></div>
          <div className="ml-2">
            <h1 className="font-bold text-sm">New Collaborators</h1>
            <p className="text-xs italic text-gray-600">
              Status: 10 new collaborators in review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyIdeas;
