import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import ReduxProvider from '@/components/provider/ReduxProvider';

import MUIThemeProvider from '@/components/provider/ThemeProvider';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <MUIThemeProvider>
          <ReduxProvider>
            {children}
            <ToastContainer position='top-right' />
          </ReduxProvider>
        </MUIThemeProvider>
      </body>
    </html>
  );
}
