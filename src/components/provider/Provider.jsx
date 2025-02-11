// components/Providers.js
'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import store from '@/redux/store';
import theme from '@/theme/theme';
import DashboardLayout from '../layouts/DashboardLayout';
import { usePathname } from 'next/navigation';
import { fetchCurrentUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function Providers({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    setIsMounted(true);
    const initializeUser = async () => {
      if (!currentUser) {
        const user = await fetchCurrentUser(dispatch);
        if (!user) {
          router.push('/login');
        }
      }
    };
  }, [path]);

  if (!isMounted) return null;

  return (
    <>
      {currentUser ? (
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <DashboardLayout>{children}</DashboardLayout>

          <ToastContainer position='top-right' />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReduxProvider store={store}>
            <DashboardLayout>{children}</DashboardLayout>

            <ToastContainer position='top-right' />
          </ReduxProvider>
        </ThemeProvider>
      )}
    </>
  );
}
