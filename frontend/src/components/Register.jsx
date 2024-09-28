import { BrowserRouter as  Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

const API_URL = 'http://localhost:5000';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    try {
      await axios.post(`${API_URL}/register`, { username, email, password });
      toast.success('Registration successful. Please login.');
      history.push('/login');
    } catch (error) {
      console.error('Registration failed', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
       
        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <Link to="/login" className="ml-1 text-purple-600 hover:underline focus:outline-none">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register