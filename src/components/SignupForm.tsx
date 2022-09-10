/** @format */

import React, { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <h1 className="text-2xl lg:text-4xl mb-8 text-[#253dee] font-bold uppercase">
        Sign up
      </h1>
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
        Sign up
      </button>
    </form>
  );
}

export default SignupForm;
