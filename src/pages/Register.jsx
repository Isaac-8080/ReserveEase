import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import Button from "../components/Button";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import { LuEyeClosed } from "react-icons/lu";
import { GoEye } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";

const Register = () => {

  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };
  const handleFullNameChange = (e) => {
    console.log("Full Name:", e.target.value); 
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    console.log("Email:", e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log("Password:", e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("Form submitted");
    e.preventDefault();
   
   
    console.log("Form Values:", { fullName, email, password });
    
   
    const userData = {
      first_name: fullName,
      email: email,
      password: password,
    };
    console.log("User Data:", userData); 
    try {
      const response = await axios.post(
        "https://reserve-lpak.onrender.com/api/auth/register/",
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Registration successful. You can now log in.");
        setError(""); 
      }
    } catch (err) {
      
      console.error("Registration Error:", err);
      setError(
        err.response?.data?.error || "An error occurred during registration."
      );
      setSuccessMessage(""); 
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#1E2939] dark:text-white">
            Create an account
          </h2>
        </div>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="post" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="fullName" text="Full Name" />
              <div className="mt-2 flex items-center pr-3 relative rounded-lg border border-gray-300 focus-within:border-indigo-600 bg-white">
                <div className="pl-3 text-gray-500">
                  <FaRegUser className="font-bold text-xl" />
                </div>
                <TextInput
                  inputStyle="block w-full rounded-lg border-0 outline-0 p-3 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>
            </div>
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
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" text="Password" />
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
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer"
                >
                  {passwordType === "password" ? (
                    <GoEye className="text-xl text-gray-500" />
                  ) : (
                    <LuEyeClosed className="text-xl text-gray-500" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <Button type="submit" text="Create account" />
            </div>
          </form>

          {error && <p className="mt-4 text-red-500">{error}</p>}
          {successMessage && (
            <p className="mt-4 text-green-500">{successMessage}</p>
          )}

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-[#F2F2F2]">
            Already a member?{" "}
            <NavLink
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Log In!
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
