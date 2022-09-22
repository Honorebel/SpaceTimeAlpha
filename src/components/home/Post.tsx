/** @format */

import React from "react";
import DummyHeadshot from "../DummyHeadshot";
import { BsCardImage, BsCameraVideo } from "react-icons/bs";

function Post() {
  return (
    <div className="w-full border-gray-400 border-2 rounded mb-8 px-4">
        <div className="w-full flex mt-10 mb-8">
          <div>
              <DummyHeadshot display={false} size="w-14" />
          </div>
          <div className="w-full ml-4 mt-1">
            <input
              className="py-2 px-4 rounded-lg w-full bg-gray-200"
              type="text"
              placeholder="Share your innovative idea"
            />
            <div className="flex space-x-5 mt-2">
              <BsCardImage size={30} />
              <BsCameraVideo size={30} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
