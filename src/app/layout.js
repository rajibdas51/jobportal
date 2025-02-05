import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReduxProvider from '@/components/provider/ReduxProvider';
//import theme from '@/theme/theme';
import store from '@/redux/store';
import MUIThemeProvider from '@/components/provider/ThemeProvider';

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MUIThemeProvider>
          <ReduxProvider store={store}>{children}</ReduxProvider>
        </MUIThemeProvider>
      </body>
    </html>
  );
}
