import { useState } from "react";

import { IoEyeSharp } from "react-icons/io5";

import backgroundImage from "../../public/The Simple Serenity of Soft Minimalism.png";
import logoImg from "../../public/Chariz Interiors 1.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleshow = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1512px] w-full flex">
        <div className="relative ">
          <img className="max-w-[727px] h-[982px]" src={backgroundImage} />
          <div className="text-white text-4xl absolute  top-1 left-12 ">
            <img src={logoImg} />
          </div>
        </div>
        <div className="w-full max-w-[727px] h-[982px] flex flex-col items-center px-10">
          <div className="flex mt-44 gap-32">
            <p className="text-[20px] cursor-default">Welcome back</p>
            <p className="text-[20px] text-[#FFC50A] cursor-pointer">
              Sign up here
            </p>
          </div>
          <h1 className="mt-10 text-[33px] leading-[36.83px] cursor-default">
            Login to Chariz Interiors
          </h1>
          <form className="flex flex-col mt-40">
            <label className="text-[#777777] text-[20px]">Email Address</label>
            <div className="relative">
              <input
                className="w-[369px] h-[63px] pl-12 pb-1 border border-[#777777]"
                type="text"
              />
              <img
                className="absolute top-4 left-3"
                src="public\mail-01.png"
                alt=""
              />
            </div>
            <label className="text-[#777777] text-[20px]">Password</label>
            <div className="relative">
              <input
                className="w-[369px] h-[63px] px-12 pb-1 border border-[#777777]"
                type={showPassword ? "text" : "password"}
              />
              <img
                className="absolute top-4 left-3"
                src="public\square-lock-02.png"
                alt=""
              />
              {showPassword ? (
                <IoEyeSharp
                  color="#FFC50A"
                  onClick={toggleshow}
                  size={25}
                  className="absolute top-5 right-4 cursor-pointer"
                />
              ) : (
                <img
                  onClick={toggleshow}
                  className="absolute top-5 right-4 cursor-pointer"
                  src="public\view-off.png"
                  alt=""
                />
              )}
            </div>
            <button className="w-[369px] h-[63px] bg-[#FFC50A] mt-5 text-[24px] font-bold">
              Login
            </button>
            <div className=" flex items-center justify-center text-center mt-5 gap-1">
              <p className="text-[14px]">Forgot password?</p>
              <p className="text-[14px] text-[#FFC50A]">Reset here</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
