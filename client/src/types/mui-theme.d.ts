import '@mui/material/styles';
declare module '@mui/material/styles' {
  interface CssVarsThemeOptions {
    cssVariables?: { colorSchemeSelector?: 'media' | 'class' | 'data' };
  }
}
