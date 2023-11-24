import React, { useState } from 'react';

const LoginForm = () => {
  // State to store user input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // State for error messages
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your actual login credentials
    const correctUsername = 'user123';
    const correctPassword = 'pass123';

    // Check if entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
      // If correct, display welcome message
      setError('');
      alert(`Welcome, ${username}!`);
    } else {
      // If incorrect, display error message
      setError('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      {/* Display error message if login fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginForm;

