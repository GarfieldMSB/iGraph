import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { InitColorSchemeScript } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/theme.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <InitColorSchemeScript attribute="class" />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>,
)
