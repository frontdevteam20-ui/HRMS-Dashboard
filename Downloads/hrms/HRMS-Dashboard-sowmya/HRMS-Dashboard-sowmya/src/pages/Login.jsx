import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';
import { AuthContext } from '../App';
import logo from '../assets/logo.webp';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const auth = getAuth(app);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Call the login function from context which will handle the navigation
      login();
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password. Please try again.');
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
