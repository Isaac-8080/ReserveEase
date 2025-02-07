import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Label from "../components/Label";
import TextInput from "../components/TextInput";

const AdminLogin = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#1E2939] dark:text-white">
            Admin Log in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" text="Email address" />
              <div className="mt-2">
                <TextInput
                  inputStyle="block w-full rounded-lg border-0 bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" text="Password" />
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="mt-2">
                <TextInput
                  inputStyle="block w-full rounded-lg border-0 bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div>
              <Button type="submit" text="Admin Sign in" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-[#F2F2F2]">
            Not an admin?{' '}
            <NavLink to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Log in as user
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;


/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import Button from "../components/common/Button";
import { login } from "../utils/auth";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(credentials)) {
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            id="username"
            value={credentials.username}
            onChange={handleInputChange}
            label="Username"
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={credentials.password}
            onChange={handleInputChange}
            label="Password"
          />
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;


*/

/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import Button from "../components/common/Button";
import { login } from "../utils/auth";

function Login() {
    const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
     if (login(credentials)) {
        navigate("/")
    } else {
         alert("Invalid Credentials")
    }
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  return (
    //<AuthLayout>
      <Form title="Login" onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          id="username"
          value={credentials.username}
          onChange={handleInputChange}
          label="Username"
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          value={credentials.password}
          onChange={handleInputChange}
          label="Password"
        />
        <Button type="submit" className="btn-primary mt-5">Login</Button>
      </Form>
    //</AuthLayout>
  );
}

export default Login;
*/