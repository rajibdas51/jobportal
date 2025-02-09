'use client';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styles from './register.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '@/redux/loaderSlice';
import { toast } from 'react-toastify';
import axios from 'axios'; // Added missing axios import

const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setIsLoading(true));
      const response = await axios.post('/api/users/register', formData);
      toast.success(response.data.message);
      router.push('/login');
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
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth='lg'
        className={styles.authContainer}
        sx={{ zIndex: 9999 }}
      >
        <Box className={`${styles.authBox}`}>
          <Box className={`${styles.formSection} ${styles.formLeft}`}>
            <Typography variant='h4' className={styles.title}>
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant='outlined'
                label='Name'
                name='name'
                required
                id='outlined-basic'
                margin='normal'
                size='small'
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant='outlined'
                label='Email'
                name='email'
                type='email'
                required
                id='outlined-basic'
                margin='normal'
                size='small'
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name='password'
                label='Password'
                type='password'
                required
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
                type='submit'
                sx={{
                  padding: '8px 18px',
                  my: '20px',
                  transition: 'background 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#05488b',
                  },
                }}
              >
                Sign Up
              </Button>
            </form>
            <Typography variant='body2' className={styles.toggleText}>
              <Link href='/login'>Already have an account? Sign In</Link>
            </Typography>
          </Box>
          <Box className={`${styles.sidePanel} ${styles.panelRight}`}>
            <Typography variant='h4'>Hello There!</Typography>
            <Typography variant='body1' sx={{ fontSize: '2rem', mb: '20px' }}>
              Enter your details to login and start your journey with us
            </Typography>
            <Button
              sx={{
                border: '1px solid #ffff',
                color: '#182F59',
                padding: '8px 18px',
                transition: 'background 0.3s ease',
              }}
              className={styles.sideButton}
              onClick={() => router.push('/login')}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterPage;
