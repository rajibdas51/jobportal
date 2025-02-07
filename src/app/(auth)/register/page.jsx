'use client';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styles from './register.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();
  const toggleForm = () => {};

  return (
    <Container maxWidth='lg' className={styles.authContainer}>
      <Box
        className={`${styles.authBox} ${
          isRegister ? styles.registerActive : ''
        }`}
      >
        <Box className={`${styles.formSection} ${styles.formLeft}`}>
          <Typography variant='h4' className={styles.title}>
            Login
          </Typography>
          <TextField
            fullWidth
            variant='outlined'
            label='Email'
            name='email'
            id='outlined-basic'
            margin='normal'
            size='small'
          />
          <TextField
            name='password'
            label='Password'
            type='password'
            fullWidth
            margin='normal'
            size='small'
          />

          <Button
            variant='contained'
            color='primary'
            fullWidth
            className={styles.button}
          >
            Sign Up
          </Button>
          <Typography
            variant='body2'
            className={styles.toggleText}
            onClick={toggleForm}
          >
            <Link href='/login' underline='hover'>
              Already have an account? Sign In
            </Link>
          </Typography>
        </Box>
        <Box className={`${styles.sidePanel} ${styles.panelRight}`}>
          <Typography variant='h4'>Welcome Back!</Typography>
          <Typography variant='body1' sx={{ fontSize: '2rem', mb: '20px' }}>
            Enter your details to login and start your journey with us
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
  );
};

export default RegisterPage;
