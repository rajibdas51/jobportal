'use client';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import styles from './login.module.css';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return <div>Hello</div>;
};

export default AuthPage;
