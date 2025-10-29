import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';

interface LocationState {
  username: string;
  loginTime: string;
}

export const Dashboard: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [isEven, setIsEven] = useState<boolean>(false);

  useEffect(() => {
    // Generate a random number between 1 and 100
    const num = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(num);
    setIsEven(num % 2 === 0);
  }, []);

  // Redirect if accessed without login
  if (!state?.username) {
    return (
      <div className="dashboard-container">
        <div className="error-box">
          <p>Access Denied. Please log in first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <div className="header">
          <h1>Welcome, {state.username}! 🎉</h1>
          <p className="subtitle">You have successfully completed the QA Interview Challenge!</p>
        </div>

        <div className="content">
          <div className="result-card">
            <h2>Your Random Number</h2>
            <div className="random-number" data-testid="random-number">
              {randomNumber}
            </div>
            
            <div className="analysis">
              <p>
                <strong>Number Type:</strong> <span data-testid="number-type">{isEven ? 'Even' : 'Odd'}</span>
              </p>
              <p>
                <strong>Status:</strong> 
                <span className="status-badge" data-testid="status-badge">
                  ✓ SELECTED
                </span>
              </p>
            </div>
          </div>

          <div className="info-card">
            <h3>Challenge Details</h3>
            <ul>
              <li>Username: <strong>{state.username}</strong></li>
              <li>Random Number: <strong>{randomNumber}</strong></li>
              <li>Number Classification: <strong>{isEven ? 'Even' : 'Odd'}</strong></li>
              <li>Login Time: <strong>{new Date(state.loginTime).toLocaleString()}</strong></li>
            </ul>
          </div>
        </div>

        <div className="test-helpers">
          <p className="test-note">Testing Identifiers for Cypress:</p>
          <code>data-testid="random-number": {randomNumber}</code>
          <code>data-testid="number-type": {isEven ? 'Even' : 'Odd'}</code>
          <code>data-testid="status-badge": ✓ SELECTED</code>
        </div>
      </div>
    </div>
  );
};
