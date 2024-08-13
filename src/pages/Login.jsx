import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        
        {/* <div style={{ marginBottom: '15px', position: 'relative' }}>
          <FaUser style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px', color: '#007BFF' }} />
          <input
            type="text"
            placeholder="Username"
            style={{ width: '85%', padding: '10px 10px 10px 35px', border: '1px solid #007BFF', borderRadius: '5px' }}
            required
          />
        </div> */}

        <div style={{ marginBottom: '15px', position: 'relative' }}>
          <MdMail style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px', color: '#007BFF' }} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '85%', padding: '10px 10px 10px 35px', border: '1px solid #007BFF', borderRadius: '5px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px', position: 'relative' }}>
          <FaLock style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px', color: '#007BFF' }} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '85%', padding: '10px 10px 10px 35px', border: '1px solid #007BFF', borderRadius: '5px' }}
            required
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}>
          Login
        </button>

        {/* <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <span>Don't have an account? <span style={{ color: '#007BFF', cursor: 'pointer' }}>Register</span></span>
        </div> */}
      </form>
    </div>
  );
}

export default Login;
