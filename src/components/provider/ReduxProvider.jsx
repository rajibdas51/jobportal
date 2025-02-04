'use client';

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

function ReduxProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  if (mounted) {
    return <Provider stroe={store}>{children}</Provider>;
  }
}

export default ReduxProvider;
