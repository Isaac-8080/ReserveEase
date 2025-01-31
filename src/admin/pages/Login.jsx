import React, { useState } from "react";
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
    <AuthLayout>
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
    </AuthLayout>
  );
}

export default Login;
