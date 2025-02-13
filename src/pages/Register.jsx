import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";
import { GoEye } from "react-icons/go";

const Register = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLocalError(null);

    try {
      const response = await register(fullName, email, password);
      if (response) {
        navigate("/dashboard"); // Redirect only if registration succeeds
      }
    } catch (err) {
      setLocalError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && <p className="text-red-500 text-center">{error}</p>}
        {localError && <p className="text-red-500 text-center">{localError}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName" text="Full Name" />
            <div className="mt-2 flex items-center relative rounded-lg border border-gray-300 focus-within:border-indigo-600 bg-white">
              <div className="pl-3 text-gray-500">
                <FaRegUser className="text-xl" />
              </div>
              <TextInput
                inputStyle="block w-full rounded-r-lg border-0 outline-0 p-3 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm"
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" text="Email Address" />
            <div className="mt-2 flex items-center relative rounded-lg border border-gray-300 focus-within:border-indigo-600 bg-white">
              <div className="pl-3 text-gray-500">
                <HiOutlineMail className="text-xl" />
              </div>
              <TextInput
                inputStyle="block w-full rounded-r-lg border-0 outline-0 p-3 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" text="Password" />
            <div className="mt-2 flex items-center relative rounded-lg border border-gray-300 focus-within:border-indigo-600 bg-white">
              <div className="pl-3 text-gray-500">
                <FiLock className="text-xl" />
              </div>
              <TextInput
                inputStyle="block w-full rounded-r-lg border-0 outline-0 p-3 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm"
                id="password"
                name="password"
                type={passwordType}
                autoComplete="new-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div onClick={togglePasswordVisibility} className="cursor-pointer pr-3">
                {passwordType === "password" ? <GoEye className="text-xl text-gray-500" /> : <LuEyeClosed className="text-xl text-gray-500" />}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <Button type="submit" text={loading ? "Creating account..." : "Create account"} disabled={loading} />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <NavLink to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;