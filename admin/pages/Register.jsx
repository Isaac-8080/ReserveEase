import React, { useState } from "react";
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
