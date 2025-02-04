'use client';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const ReduxtProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <Provider store={store}>{children}</Provider>;
  }
};
