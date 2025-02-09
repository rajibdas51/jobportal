import Image from 'next/image';
import styles from './page.module.css';

export default function Home({ children }) {
  const router = useRouter();
  const path = router.pathname;

  if (path === '/') {
  }
  return <>{children}</>;
}
