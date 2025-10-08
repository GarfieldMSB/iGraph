// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  // Habilita variables CSS y permite toggle manual con clase en <html>
  cssVariables: {
    colorSchemeSelector: 'class', // 'class' o 'data'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#f4f6f9' },
        secondary: { main: '#9c27b0' },
        background: { default: '#f4f6f9', paper: '#ffffff' }, // no blanco puro
        text: { primary: '#1a1c20', secondary: '#5b616b' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' },
        secondary: { main: '#ce93d8' },
        background: { default: '#14171a', paper: '#1b1f24' }, // gris cómodo
        text: { primary: '#e6e8eb', secondary: '#b3b8c2' },
      },
    },
  },
  shape: { borderRadius: 12 },
});
