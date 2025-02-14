// Import necessary dependencies from React and Axios
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create an authentication context
const AuthContext = createContext();

// Custom hook to access the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  
  // State to store user information and token, initialized from localStorage
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [error, setError] = useState(null);

  // Set the default Authorization header if a token exists
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Function to handle user login
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://reserve-lpak.onrender.com/api/auth/signin/",
        { email, password }
      );
      setToken(response.data.token);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setError(null);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  // Function to handle user registration
  const register = async (fullName, email, password) => {
    try {
      const response = await axios.post(
        "https://reserve-lpak.onrender.com/api/auth/register/",
        { fullName, email, password }
      );
      setToken(response.data.token);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setError(null);
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  // Function to log the user out
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // Provide authentication state and functions to the app
  return (
    <AuthContext.Provider value={{ user, token, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};