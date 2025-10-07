import { useColorScheme } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

export function ModeToggle() {
  const { mode, setMode } = useColorScheme(); // 'light' | 'dark' | 'system'
  if (!mode) return null; // por si está hidratando

  return (
    <Tooltip title={mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
      <IconButton
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        aria-label="toggle color mode"
      >
        {mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
}
