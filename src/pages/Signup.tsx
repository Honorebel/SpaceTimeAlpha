/** @format */

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "@mui/material/Alert";

function Signup() {
  const [fn, setFn] = useState<string>('');
  const [ln, setLn] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user, signup, login, update} = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();

      try {
          setError('');
          setLoading(true);
          
          await signup(email, password);
          await update(fn+" "+ln);
          
          // await login(email, password);
        } catch (e:any) {
          setError(e.message);
          console.log(e.message);
          
        }
        setLoading(false);
      }

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
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-2xl lg:text-4xl mb-8 text-[#253dee] font-bold uppercase">
              Sign up
            </h1>
            {error && (
              <Alert className="border-[1px] rounded-lg flex border-gray-300 mb-6 w-fulls" severity="error">
                {error}
              </Alert>
            )}
            <div className="flex">
              <input
                className="border-[1px] rounded-lg p-3 flex border-gray-300 mb-6 w-full mr-4"
                type="text"
                value={fn}
                id="fn"
                placeholder="First Name"
                onChange={(e) => setFn(e.target?.value)}
                required
              />
              <input
                className="border-[1px] rounded-lg p-3 flex border-gray-300 mb-6 w-full"
                type="text"
                value={ln}
                id="ln"
                placeholder="Last Name"
                onChange={(e) => setLn(e.target?.value)}
                required
              />
            </div>
            <input
              className="border-[1px] rounded-lg p-3 flex border-gray-300 mb-6 w-full"
              type="text"
              value={email}
              id="email"
              placeholder="Email"
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
              Sign up
            </button>
          </form>
          {/* Prompt to switch page */}
          <div className="py-6 text-gray-500 text-center">
            <p className="text-sm">
              Already have an account?
              <Link
                className="text-gray-900 hover:text-[#1021a2] ml-1"
                to="/login"
              >
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
