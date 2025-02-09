'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Home({ children }) {
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser.name);

  return <>Welcome {currentUser?.name}!</>;
}
