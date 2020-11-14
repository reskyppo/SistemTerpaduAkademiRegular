import React from "react";

const Login = () => {
  return (
    <div className="pl-24 ">
      <div className="pt-12">
        <h1 className="font-bold text-5xl">Login</h1>
        <p className="pt-6 text-2xl text-gray-500">
          Please login to your account
        </p>
      </div>

      <div className="pt-12">
        <p className="pt-6 text-2xl text-gray-500">Username</p>
        <input
          type="text"
          className="mt-5 border border-gray-500 rounded-lg h-12"
          style={{width : 500}}
        />
      </div>
    </div>
  );
};

export default Login;
