'use client';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styles from './register.module.css';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Container maxWidth='md' className={styles.authContainer}>
      <Box
        className={`${styles.authBox} ${
          isRegister ? styles.registerActive : ''
        }`}
      >
        <Box
          className={`${styles.formSection} ${
            isRegister ? styles.formRight : styles.formLeft
          }`}
        >
          <Typography variant='h4' className={styles.title}>
            {isRegister ? 'Register' : 'Login'}
          </Typography>
          <TextField
            label='Email'
            fullWidth
            margin='normal'
            className={styles.input}
          />
          <TextField
            label='Password'
            type='password'
            fullWidth
            margin='normal'
            className={styles.input}
          />
          {isRegister && (
            <TextField
              label='Confirm Password'
              type='password'
              fullWidth
              margin='normal'
              className={styles.input}
            />
          )}
          <Button
            variant='contained'
            color='primary'
            fullWidth
            className={styles.button}
          >
            {isRegister ? 'Sign Up' : 'Sign In'}
          </Button>
          <Typography
            variant='body2'
            className={styles.toggleText}
            onClick={toggleForm}
          >
            {isRegister
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Typography>
        </Box>
        <Box
          className={`${styles.sidePanel} ${
            isRegister ? styles.panelLeft : styles.panelRight
          }`}
        >
          <Typography variant='h4' className={styles.sideTitle}>
            {isRegister ? 'Hello, Friend!' : 'Welcome Back!'}
          </Typography>
          <Typography variant='body1' className={styles.sideText}>
            {isRegister
              ? 'Enter your personal details and start your journey with us'
              : 'Enter your details to login and start your journey with us'}
          </Typography>
          <Button
            variant='outlined'
            className={styles.sideButton}
            onClick={toggleForm}
          >
            {isRegister ? 'Login' : 'Register'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthPage;
