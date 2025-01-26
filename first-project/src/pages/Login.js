import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // useNavigate hook

  // Simulated user data (for testing purposes)
  const users = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'password456' }
  ];

  // Handle login logic
  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    // Find user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      setError('');
      navigate('/dashboard');  // Redirect to the dashboard after login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Handle email input change
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Handle password input change
      />
      <button onClick={handleLogin}>Login</button> {/* Call handleLogin on click */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if invalid credentials */}
    </div>
  );
}

export default Login;
