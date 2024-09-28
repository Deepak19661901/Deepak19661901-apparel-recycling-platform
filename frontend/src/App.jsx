import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import SubmitApparel from './components/SubmitApparel';

const API_URL = 'http://localhost:5000';

function App() {
  const [user, setUser] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ username: 'User' });
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = scrollPosition > 50 ? 'bg-green-600 shadow-lg' : 'bg-transparent';

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-pattern z-10"></div>
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarClass}`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-white text-lg">Apparel Recycling</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {user ? (
                  <>
                    <Link to="/submit" className="py-2 px-2 font-medium text-white rounded hover:bg-green-500 transition duration-300">Submit Apparel</Link>
                    <Link to="/profile" className="py-2 px-2 font-medium text-white rounded hover:bg-green-500 transition duration-300">Profile</Link>
                    <button onClick={() => { localStorage.removeItem('token'); setUser(null); }} className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="py-2 px-2 font-medium text-white rounded hover:bg-green-500 transition duration-300">Login</Link>
                    <Link to="/register" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Register</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-20">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={() => <Login setUser={setUser} />} />
            <Route path="/register" component={Register} />
            <Route path="/submit" component={SubmitApparel} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;