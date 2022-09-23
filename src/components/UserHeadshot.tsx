/** @format */

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaUserAlt } from "react-icons/fa";

interface IUserHeadshot{
    size?: string
}

function UserHeadshot({ size='w-[4rem]' }: IUserHeadshot) {

  const { user } = useAuth();

  return (
    <div className="relative hover:scale-105 cursor-pointer ease-in-out duration-200 ">
      {user.photoURL ? 
        <img
          className={`rounded-full shadow-md object-cover ${size}`}
          src={user.photoURL}
        /> : 
        <FaUserAlt size={35} />

      }
    </div>
  );
}

export default UserHeadshot;
