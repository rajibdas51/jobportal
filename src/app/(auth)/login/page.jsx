'use client';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setIsLoading } from '@/redux/loaderSlice';
import { setCurrentUser } from '@/redux/userSlice';
import axios from 'axios';
const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post('/api/users/login', formData);
      toast.success(response.data.message);
      dispatch(setCurrentUser(response.data.user));

      router.push('/');
      console.log(response.data.data.user);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
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
        <Box className={`${styles.authBox} `}>
          <Box className={`${styles.formSection} ${styles.formLeft}`}>
            <Typography variant='h4' className={styles.title}>
              Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label='Email'
                name='email'
                type='email'
                margin='normal'
                size='small'
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name='password'
                label='Password'
                type='password'
                fullWidth
                margin='normal'
                size='small'
                value={formData.password}
                onChange={handleChange}
              />

              <Button
                variant='contained'
                color='primary'
                fullWidth
                sx={{ padding: '8px 18px', m: '20px' }}
                type='submit'
              >
                Sign In
              </Button>
            </form>
            <Typography variant='body2' className={styles.toggleText}>
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
