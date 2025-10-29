import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!username.trim()) {
      setError('Username is required');
      return;
    }
    
    if (!password.trim()) {
      setError('Password is required');
      return;
    }
    
    // Simulate authentication - accept any non-empty credentials
    if (username.length > 0 && password.length > 0) {
      setError('');
      // Navigate to dashboard with credentials
      navigate('/dashboard', { 
        state: { 
          username: username,
          loginTime: new Date().toISOString()
        } 
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Test QA Interview</h1>
        <h2>Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              data-testid="username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              data-testid="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && <div className="error-message" data-testid="error-message">{error}</div>}

          <button type="submit" className="login-button" data-testid="login-button">
            Login
          </button>
        </form>

        <p className="info-text">
          Use any username and password to test the login flow.
        </p>
      </div>
    </div>
  );
};
