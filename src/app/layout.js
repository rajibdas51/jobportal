import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/components/provider/Provider';
import ReduxProvider from '@/components/provider/ReduxProvider';
import store from '@/redux/store';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
