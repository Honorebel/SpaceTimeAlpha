/** @format */

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaUserAlt } from "react-icons/fa";


function UserHeadshot() {

  const { user } = useAuth();

  return (
    <div className="relative hover:scale-105 cursor-pointer ease-in-out duration-200 ">
        <img
          className={'rounded-full shadow-md object-cover w-14 h-14'}
          src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80'
        /> 
    </div>
  );
}

export default UserHeadshot;
