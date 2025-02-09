'use client';
import Image from 'next/image';
import styles from './page.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '@/lib/auth';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Home({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser?.name);
  const pathname = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    const initializeUser = async () => {
      if (!currentUser) {
        const user = await fetchCurrentUser(dispatch);
        if (!user) {
          router.push('/login');
        }
      }
    };

    initializeUser();
  }, [pathname]);
  return <>Welcome {currentUser?.name}!</>;
}
