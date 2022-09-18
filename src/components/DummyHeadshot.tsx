/** @format */

import React from "react";

interface IDummyHeadshot{
    display: boolean
    size?: string
}

function DummyHeadshot({ display, size='w-[4rem]' }: IDummyHeadshot) {
  return (
    <div className="relative hover:scale-105 cursor-pointer ease-in-out duration-200 ">
      <img
        className={`rounded-full shadow-md object-cover ${size}`}
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        alt="Dummy Headshot"
      />

      {/* Online Green Button */}
      <span hidden={!display} className="h-4 w-4 bg-green-500 rounded-full absolute right-0.5 bottom-0.5">
        <span className="h-2 w-2 bg-white rounded-full absolute right-1 bottom-1"></span>
      </span>

      {/* Offline Red Button */}
      <span hidden className="h-4 w-4 bg-red-500 rounded-full absolute right-0.5 bottom-0.5">
        <span className="h-2 w-2 bg-white rounded-full absolute right-1 bottom-1"></span>
      </span>
    </div>
  );
}

export default DummyHeadshot;
