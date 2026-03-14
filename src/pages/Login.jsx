import React, { useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

import { loginApi } from '../api/authApi';

import logo from '../assets/logo.webp';

import './Login.css';





const Login = ({ onLogin }) => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';



  const handleSubmit = async (e) => {

    e.preventDefault();



    if (!email || !password) {

      setError("Please enter both email and password.");

      return;

    }



    setIsLoading(true);

    setError('');



    try {

      const response = await loginApi(email, password);



      if (response.status === "200") {

        console.log('Login successful, calling onLogin...');

        // Store user data in localStorage for the App.jsx context

        localStorage.setItem("token", response.token);

        localStorage.setItem("user", JSON.stringify(response.user_data));

        localStorage.setItem("userLevel", response.user_data.level); // Store level separately

        

        // Call the onLogin function from App.jsx

        onLogin();

        

        // Navigate based on level

        if (response.user_data.level === "1") {

          // Level 1 = Employee → redirect to employee profile page

          navigate('/employee-profile');

        } else if (response.user_data.level === "2" || response.user_data.level === "3") {

          // Level 2 & 3 = Admin/Manager → redirect to dashboard

          navigate('/dashboard');

        } else {

          // Default fallback for other levels

          navigate('/dashboard');

        }

      } else {

        setError(response.message || 'Login failed. Please check your credentials.');

      }



    } catch (error) {

      console.error('Login error:', error);

      setError('Login failed. Please try again.');



    } finally {

      setIsLoading(false);

    }

  };



  return (

    <div className="login-container">

      {/* Logo */}

      <img 

        src={logo} 

        alt="Lion HR Logo" 

        className="login-logo" 

      />

      

      {/* Left Section */}

      <div className="login-left">

        <h1 className="login-heading">

          Empowering your workforce starts here..

        </h1>

        <p className="login-subtext">

          Manage, Connect, and Grow with{" "}

          <span className="highlight">Lion HR</span>

        </p>



        <div className="decorative-shapes">

          <img 

            src="/circle.svg" 

            alt="Decorative circles" 

            className="shapes-image"

          />

        </div>

      </div>



      {/* Right Section */}

      <div className="login-right">

        <div className="login-box">

          <h2 className="login-title">Login</h2>

          <form onSubmit={handleSubmit}>

            {error && <div className="error-message">{error}</div>}

            <div className="input-group">

              <label htmlFor="email" className="form-label">Email</label>

              <div className="input-wrapper">

                <FaUser className="input-icon" />

                <input

                  type="email"

                  id="email"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  placeholder="admin@gmail.com"

                  required

                  disabled={isLoading}

                />

              </div>

            </div>



            <div className="input-group">

              <div className="password-header">

                <label htmlFor="password" className="form-label">Password</label>

              </div>

              <div className="input-wrapper">

                <FaLock className="input-icon" />

                <input

                  type={showPassword ? "text" : "password"}

                  id="password"

                  value={password}

                  onChange={(e) => setPassword(e.target.value)}

                  placeholder="password123"

                  required

                  disabled={isLoading}

                />

                <button

                  type="button"

                  onClick={() => setShowPassword(!showPassword)}

                  className="show-btn"

                >

                  {showPassword ? <FaEyeSlash /> : <FaEye />}

                  <span>{showPassword ? "" : ""}</span>

                </button>

              </div>

            </div>



            <button

              type="submit"

              className="login-btn"

              disabled={isLoading}

            >

              {isLoading ? "Signing in..." : "Login"}

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};



export default Login;

