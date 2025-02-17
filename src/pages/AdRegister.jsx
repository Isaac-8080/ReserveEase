import { NavLink } from "react-router-dom"
import Button from "../components/Button"
import Label from "../components/Label"
import TextInput from "../components/TextInput"

const SignIn = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#1E2939] dark:text-white">
            Add an admin
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6">
        
            {/* email */}
            <div>
              <Label htmlFor="email" text="Email address" />
              <div className="mt-2">
                <TextInput inputStyle="block w-full rounded-lg border-0 bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" id="email" name="email" type="email" autoComplete="email" />
              </div>
            </div>

            {/* password */}
            <div>

              <div className="flex items-center justify-between">
                <Label htmlFor="password" text="Password" />
              </div>

              <div className="mt-2">
                <TextInput inputStyle="block w-full rounded-lg border-0 bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" id="password" name="password" type="password" autoComplete="current-password" />
              </div>

            </div>
            
            {/* confirm password */}
            <div>

              <div className="flex items-center justify-between">
                <Label htmlFor="confirmPassword" text="Confirm Password" />
              </div>

              <div className="mt-2">
                <TextInput inputStyle="block w-full rounded-lg border-0 bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" id="confirmPassword" name="confirmPassword" type="password" autoComplete="current-password" />
              </div>

            </div>

            {/* submit button */}
            <div>
              <Button type="submit" text="Add member" />
            </div>

          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-[#F2F2F2]">
            Already a member?{' '}
            <NavLink to="/admin/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Log In!
            </NavLink>
          </p>

        </div>

      </div>
    </>
  )
}

export default SignIn
/*import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
 import Button from "../components/common/Button";
import { register } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });

    const handleRegister = (e) => {
       e.preventDefault()
      if (register(formData)) {
        navigate("/login")
    } else {
         alert("Invalid Credentials")
    }
    };

     const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };


  return (
    <AuthLayout>
        <Form title="Register" onSubmit={handleRegister}>
      <Input
        type="text"
        placeholder="Username"
        id="username"
        value={formData.username}
          onChange={handleInputChange}
         label="Username"
      />
      <Input
        type="email"
        placeholder="Email"
        id="email"
        value={formData.email}
          onChange={handleInputChange}
         label="Email"
      />
      <Input
        type="password"
        placeholder="Password"
        id="password"
        value={formData.password}
          onChange={handleInputChange}
          label="Password"
      />
     <Button type="submit" className="btn-primary mt-5">Register</Button>
      </Form>
    </AuthLayout>
  );
}

export default Register;
*/