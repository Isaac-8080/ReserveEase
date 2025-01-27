import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import { useState } from "react";
import { GoEye } from "react-icons/go";
import { LuEyeClosed } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-[#1E2939] dark:text-white">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <Label htmlFor="email" text="Email Address" />
              <div className="mt-2 flex items-center pr-3 relative rounded-lg border border-gray-300 focus-within:border-indigo-600 bg-white">
                <div className="pl-3 text-gray-500">
                  <HiOutlineMail className="text-xl" />
                </div>
                <TextInput
                  inputStyle="block w-full rounded-lg border-0 outline-0 p-3 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" text="Password" />
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="mt-2 flex items-center pr-3 relative rounded-lg border border-gray-300 focus-within:border-indigo-600 bg-white">
                <div className="pl-3 text-gray-500">
                  <FiLock className="text-xl" />
                </div>
                <TextInput
                  inputStyle="block w-full rounded-lg border-0 outline-0 p-3 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                  id="password"
                  name="password"
                  type={passwordType}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                />
                <div onClick={togglePasswordVisibility} className="cursor-pointer">
                  {passwordType === "password" ? <GoEye className="text-xl text-gray-500" /> : <LuEyeClosed className="text-xl text-gray-500" />}
                </div>
              </div>
            </div>

            <div>
              <Button type="submit" text="Sign in" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-[#F2F2F2]">
            Not a member?{" "}
            <NavLink to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign up!
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
