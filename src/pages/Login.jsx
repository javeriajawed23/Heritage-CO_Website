import React, { useState } from "react";
import { assets } from "../assets/assets"; // Optional if you want an image

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add login/signup logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF5F0] px-4">
      {/* Card Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Panel - Optional Branding / Hero Image */}
        <div className="hidden md:flex md:w-1/2 bg-[#83162d] items-center justify-center p-8">
          <h2 className="text-4xl font-[Playfair_Display] text-[#E9C8C2]">
            Welcome to <br /> Heritage&Co
          </h2>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-[Playfair_Display] text-[#611627] mb-2">{currentState}</h1>
            <hr className="border-none h-[2px] w-12 mx-auto bg-[#611627]" />
          </div>

          {/* Form */}
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
            {/* Name for Sign Up */}
            {currentState === "Sign Up" && (
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-[#611627] rounded-md placeholder-[#83162d] text-[#4B0E1C]"
                required
              />
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="hello@gmail.com"
              className="w-full px-4 py-3 border border-[#611627] rounded-md placeholder-[#83162d] text-[#4B0E1C]"
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-[#611627] rounded-md placeholder-[#83162d] text-[#4B0E1C]"
              required
            />

            {/* Links */}
            <div className="flex justify-between text-sm text-[#83162d]">
              <p className="cursor-pointer hover:underline">Forgot your password?</p>
              {currentState === "Login" ? (
                <p
                  onClick={() => setCurrentState("Sign Up")}
                  className="cursor-pointer hover:underline"
                >
                  Create a new account
                </p>
              ) : (
                <p
                  onClick={() => setCurrentState("Login")}
                  className="cursor-pointer hover:underline"
                >
                  Login here
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#E9C8C2] text-[#4B0E1C] font-semibold rounded-md shadow-md hover:bg-[#f0d7d2] transition"
            >
              {currentState === "Login" ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
