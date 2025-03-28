import React from "react";

const Login = () => {
  return (
    <div className="flex items-center font-medium">
      {/* link button */}
      <a href="https://portal.weismanntradingrowth.com/auth/login" className="transition hover:text-blue">
        Login
      </a>
      {/* Seperator */}
      <span className="mx-6 font-thin text-slate-300">|</span>
      {/* Register button */}
      <a href="https://portal.weismanntradingrowth.com/auth/register">
      <button className="px-8 py-2 text-base text-white bg-blue-500 rounded-full hover:bg-blue-600 ">
        Register
      </button>
      </a>
    </div>
  );
};

export default Login;
