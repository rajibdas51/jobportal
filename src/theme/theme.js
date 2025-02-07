'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#182F59', // Change primary color
    },
    secondary: {
      main: '#ff8e53', // Change secondary color
    },
    background: {
      default: '#f5f5f5', // Change background color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Customize font
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
