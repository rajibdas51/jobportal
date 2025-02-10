// app/page.jsx
'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchCurrentUser } from '@/lib/auth';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function HomePage({ children }) {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
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
  }, [currentUser, dispatch, router]);

  return <div>{children}</div>;
}
