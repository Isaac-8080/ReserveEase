/*import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-api.com', // Replace with your actual backend API URL
});

// Login function
const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data; // Assuming your backend returns some kind of user data or token on successful login
  } catch (error) {
    console.error('Error logging in:', error);
    return false;
  }
};

// Register function
const register = async (formData) => {
  try {
    const response = await api.post('/register', formData);
    return response.data; // Assuming your backend returns some kind of success message or user data on successful registration
  } catch (error) {
    console.error('Error registering:', error);
    return false;
  }
};

export { login, register };
*/

const users = []
function login(credentials) {
    const user = users.find((user) => user.username === credentials.username && user.password === credentials.password)
     return user ? true : false
}

function register(formData) {
    const user = {
        username: formData.username,
        email: formData.email,
        password: formData.password
    }
    users.push(user);
    return true;
}

export {login, register}
