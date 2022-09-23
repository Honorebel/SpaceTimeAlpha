/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import SpaceTime from "../components/SpaceTime";
import { useAuth } from "../contexts/AuthContext";
import Alert from "@mui/material/Alert";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user, login, resetPassword, googleSignIn } = useAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await googleSignIn();
      navigate("/");
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(email);
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
    alert("email has been sent");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

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
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-2xl lg:text-4xl mb-8 text-[#253dee] font-bold uppercase">
              login
            </h1>
            {error && (
              <Alert className="border-[1px] rounded-lg flex border-gray-300 mb-6 w-fulls" severity="error">
                {error}
              </Alert>
            )}
            <input
              className="border-[1px] rounded-lg p-3 flex border-gray-300 mb-6 w-full"
              type="text"
              value={email}
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target?.value)}
              required
            />
            <input
              className="border-[1px] rounded-lg p-3 flex border-gray-300 mb-6 w-full"
              type="password"
              value={password}
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target?.value)}
              required
            />

            <button className="bg-[#253dee] shadow-lg text-white font-bold py-3 px-10 rounded-lg uppercase hover:scale-105 hover:bg-[#0e23c2] ease-in-out duration-200">
              Sign in
            </button>
          </form>
          <p
            className="text-gray-900 text-sm mt-5 block hover:text-[#1021a2] cursor-pointer"
            onClick={handleResetPassword}
          >
            Forget your password?
          </p>
          {/* Divider Line */}
          <div className="flex py-4 items-center w-full">
            <div className="flex-grow border-t border-gray-500 "></div>
            <p className="text-gray-500 flex-shrink mx-4 uppercase">or</p>
            <div className="flex-grow border-t border-gray-500 "></div>
          </div>

          <div
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center cursor-pointer text-gray-600 shadow-lg font-bold py-3 px-10 w-full rounded-lg  hover:scale-105 ease-in-out duration-200"
          >
            <FcGoogle className="mr-4" size={30} />
            Sign with Google
          </div>

          {/* Prompt to switch page */}
          <div className="py-6 text-gray-500 text-center">
            <p className="text-sm">
              Don&apos;t have an account?
              <Link
                className="text-gray-900 ml-1 hover:text-[#1021a2]"
                to="/signup"
              >
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
