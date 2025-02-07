'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import CssBaseline from '@mui/material/CssBaseline'; // For CSS resets

export default function MUIThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <CssBaseline /> {/* MUI CSS resets */}
      {children}
    </ThemeProvider>
  );
}
