/** @format */

import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
    <>
      <div className="w-full h-screen grid md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-3 h-screen bg-[#253dee] text-center">
          <div className="flex justify-center items-center mx-auto w-full h-full max-w-[720px] ">
            <h1 className="text-[#f0f0f0] tracking-wide font-bold text-2xl lg:text-4xl">
              Welcome to
              <span className="border-[6px] rounded-full px-10 py-4 ml-4 inline-block hvr-buzz-out ">
                SpaceTime.
              </span>
            </h1>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center items-center h-screen w-[80%] lg:w-[70%] mx-auto max-w-[380px]">
          <SignupForm/>

          {/* Prompt to switch page */}
          <div className="py-6 text-gray-500 text-center">
            <p className="text-sm">
              Already have an account?
              <Link className="text-gray-900 hover:text-[#1021a2] ml-1" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
