import React, { useState } from 'react';
import './Login.css'
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import gedungWK from '/src/assets/img/gedungWK.jpg';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika login di sini
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const isDesktop = useMediaQuery('(min-width:768px)');

  return (
    // <Box sx={{ backgroundColor: '' }}>
    <div style={{ backgroundColor: '', Width: '100vh' }}>
    <Box
      sx={{   
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: isDesktop ? 'none' : `url(${gedungWK})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {isDesktop && (
        <Box
          sx={{
            width: '54%',
            height: '100%',
            backgroundImage: `url(${gedungWK})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(50%)',
          }}
        />
      )}
      <Box
        sx={{
          width: isDesktop ? '100%' : '80%',
          maxWidth: '600px',
          backgroundColor: isDesktop ? '' : 'rgba(255, 255, 255, 0.9)',
          borderRadius: isDesktop ? 'none' : 2,
          padding: isDesktop ? 7 : 3,
          boxShadow: isDesktop ? 'none' : 3,
          zIndex: isDesktop ? 'none' : 1,
          // margin: isDesktop ? 20 : 'none',
          
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, borderRadius: '50px', }}>
            <MdMail style={{ marginRight: 8, color: '#000000' }} />
            {/* <MdMail style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px', color: '#000000' }} /> */}
            {/* <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '10px 10px 10px 35px', 
              border: '0.5px solid ', 
              height: '25 px',
              borderRadius: '5px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
            }}
            required
          /> */}
          <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              type="email"
              autoComplete="current-Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, borderRadius: '50px', }}>
            <FaLock style={{ marginRight: 8, color: '#000000' }} />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, borderRadius: 20 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
      </div>
    
    // </Box>
  );
}

export default Login;
