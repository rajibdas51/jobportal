// components/Providers.js
'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import store from '@/redux/store';
import theme from '@/theme/theme';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Providers({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReduxProvider store={store}>
        <DashboardLayout>{children}</DashboardLayout>

        <ToastContainer position='top-right' />
      </ReduxProvider>
    </ThemeProvider>
  );
}
