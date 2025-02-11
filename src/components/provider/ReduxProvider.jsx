'use client';

import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from '@/redux/store';
import Providers from './Provider';

function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <Providers>{children}</Providers>
    </Provider>
  );
}

export default ReduxProvider;
