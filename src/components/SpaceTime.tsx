/** @format */

import React from "react";

interface ISpaceTime{
    borderThickness: string; // border-[5px]
    px:string; //px-10
    py:string; //py-4
    others?: string;
}

function SpaceTime({ borderThickness, px, py, others } : ISpaceTime) {
  return (
    <span className= {`${borderThickness+" "+px+" "+py + " " + others} rounded-full  ml-4 inline-block hvr-buzz-out `}>
      SpaceTime.
    </span>
  );
}

export default SpaceTime;
