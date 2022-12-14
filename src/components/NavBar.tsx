/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SpaceTime from "./SpaceTime";
import { FiHome, FiGrid, FiBell, FiMessageSquare } from "react-icons/fi";
import UserHeadshot from './UserHeadshot';
import SearchBox from "./SearchBox";
import Collapsible from 'react-collapsible';
import { useAuth } from "../contexts/AuthContext";


function NavBar() {
  const { user, logout } = useAuth();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();


  const handleLogout = async(e:React.FormEvent) => {
      e.preventDefault();

      try {
          setError('');
          await logout();
          window.location.reload();
      } catch (e:any) {
          setError(e.message);
      }
  }
  

  return (
      <div className="fixed w-full shadow-xl z-[100] bg-[#f0f0f0]/90">
        <div className="flex justify-between items-center w-full h-full py-4 px-4 ">
          <div className="flex items-center justify-center lg:ml-10">
              {/* SpaceTime logo */}
              <Link to="/">
                <SpaceTime
                  borderThickness="border-[3px]"
                  px="px-4"
                  py="py-2"
                  others="text-[#253dee] border-[#253dee] font-bold"
                />
              </Link>
              {/* Search Box */}
              <SearchBox />
          </div>
          <div className="flex items-center justify-center space-x-4 lg:space-x-6">
              {/* Right side */}
              <FiHome size={30} className="hover:scale-105 cursor-pointer ease-in-out duration-200" />
              <FiGrid size={30} className="hover:scale-105 cursor-pointer ease-in-out duration-200" />
              <FiBell size={30} className="hover:scale-105 cursor-pointer ease-in-out duration-200" />
              <FiMessageSquare size={30} className="hover:scale-105 cursor-pointer ease-in-out duration-200" />
              
              
              <Collapsible trigger={<UserHeadshot />}>
                {user ? <p onClick={handleLogout} className="underline cursor-pointer text-sm text-center">Logout</p> : <p className="underline cursor-pointer text-sm text-center">Login</p>}
              </Collapsible>

      
          </div>
        </div>
      </div>
  );
}

export default NavBar;
