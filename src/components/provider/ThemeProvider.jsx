'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';

export default function MUIThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
