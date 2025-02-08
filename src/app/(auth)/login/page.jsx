'use client';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();
  const toggleForm = () => {
    //  setIsRegister(!isRegister);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("/login-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw', // Full width
        height: '100vh', // Full height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='lg' className={styles.authContainer}>
        <Box
          className={`${styles.authBox} ${
            isRegister ? styles.registerActive : ''
          }`}
        >
          <Box className={`${styles.formSection} ${styles.formLeft}`}>
            <Typography variant='h4' className={styles.title}>
              Sign In
            </Typography>
            <TextField label='Email' name='email' margin='normal' size='md' />
            <TextField
              name='password'
              label='Password'
              type='password'
              fullWidth
              margin='normal'
              size='md'
            />

            <Button
              variant='contained'
              color='primary'
              fullWidth
              sx={{ padding: '8px 18px', m: '20px' }}
            >
              Sign In
            </Button>
            <Typography
              variant='body2'
              className={styles.toggleText}
              onClick={toggleForm}
            >
              <Link href='/register' underline='hover'>
                Don't have an account? Sign Up
              </Link>
            </Typography>
          </Box>
          <Box className={`${styles.sidePanel} ${styles.panelRight}`}>
            <Typography variant='h4'>Welcome Back!</Typography>
            <Typography variant='body1' sx={{ fontSize: '2rem', mb: '20px' }}>
              {' '}
              Enter your personal details and start your journey with us Enter
            </Typography>
            <Button
              sx={{
                border: '1px solid #ffff',
                color: '#182F59',
                padding: '8px 18px',
              }}
              className={styles.sideButton}
              onClick={() => router.push('/register')}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
