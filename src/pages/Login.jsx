import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";  // Make sure your Button component handles 'loading' state
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import { GoEye } from "react-icons/go";
import { LuEyeClosed } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://reserve-lpak.onrender.com/api/auth/signin/",
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);
      

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Store token
        setSuccessMessage("Login successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000); // Wait 1 second before redirecting
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(
        err.response?.data?.error ||
          "Unable to log in. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
        <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-[#1E2939] dark:text-white">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="post" onSubmit={handleSubmit}>
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
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password" text="Password" />
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
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
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div onClick={togglePasswordVisibility} className="cursor-pointer">
                {passwordType === "password" ? (
                  <GoEye className="text-xl text-gray-500" />
                ) : (
                  <LuEyeClosed className="text-xl text-gray-500" />
                )}
              </div>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              text={loading ? "Signing in..." : "Sign in"}
              disabled={loading}
            />
          </div>
        </form>

        {error && (
          <p className="mt-4 text-red-500" aria-live="polite">
            {error}
          </p>
        )}
        {successMessage && (
          <p className="mt-4 text-green-500" aria-live="polite">
            {successMessage}
          </p>
        )}

        <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-[#F2F2F2]">
          Not a member?{" "}
          <NavLink
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign up!
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
