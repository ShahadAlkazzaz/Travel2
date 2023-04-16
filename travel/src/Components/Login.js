import React, { useState } from 'react';
import { useAuth } from './AuthenticationContext';
import '../App.css';
import {FaSmile} from 'react-icons/fa';

function Login() {
  const { isLoggedIn, login, logout } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
    setName(email.split('@')[0]);
  };

  return (   <div className='login-container'>
    <div className="login-form">

      {isLoggedIn ? (
        <>
          <p className='welcome-form'>Welcome, {name}! </p>
          <p className='smile'><FaSmile/></p>
          <button onClick={() => logout()}>Log out</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Login </button>
        </form>
      )}
    </div>
    </div>
  );
}

export default Login;
