/** @format */

import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import SpaceTime from "../components/SpaceTime";

function Login() {
  return (
    <>
      <div className="w-full h-screen grid md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-3 h-screen bg-[#253dee] text-center">
          <div className="flex justify-center items-center mx-auto w-full h-full max-w-[720px] ">
            <h1 className="text-[#f0f0f0] tracking-wide font-bold text-2xl lg:text-4xl">
              Welcome to
              <SpaceTime borderThickness="border-[5px]" px="px-10" py=" py-4" />
            </h1>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center items-center h-screen w-[80%] lg:w-[70%] mx-auto max-w-[380px]">
          <LoginForm />
          <Link className="text-gray-900 text-sm mt-5 block hover:text-[#1021a2]" to="/">
              Forget your password?
            </Link>
          {/* Divider Line */}
          <div className="flex py-4 items-center w-full">
            <div className="flex-grow border-t border-gray-500 "></div>
            <p className="text-gray-500 flex-shrink mx-4 uppercase">or</p>
            <div className="flex-grow border-t border-gray-500 "></div>
          </div>

          <div className="flex items-center justify-center cursor-pointer text-gray-600 shadow-lg font-bold py-3 px-10 w-full rounded-lg  hover:scale-105 ease-in-out duration-200">
            <FcGoogle className="mr-4" size={30} />
            Sign with Google
          </div>

          {/* Prompt to switch page */}
          <div className="py-6 text-gray-500 text-center">
            <p className="text-sm">
              Don&apos;t have an account?
              <Link className="text-gray-900 ml-1 hover:text-[#1021a2]" to="/signup">
                Create an account
              </Link>
            </p>


          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
