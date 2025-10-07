// src/features/dashboard/components/Sidebar/Sidebar.tsx
import * as React from 'react';
import { Drawer, Box, List, Divider, IconButton, Stack } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import SidebarItem from './SidebarItem';
import { NAV_ITEMS } from './nav.config';

// Anchos colapsado/expandido (para futuro)
const WIDTH_COLLAPSED = 72;
const WIDTH_EXPANDED  = 240;

type Props = {
  currentKey?: string;                 // para marcar el seleccionado
  onNavigate?: (path: string) => void; // usa router después
};

export default function Sidebar({ currentKey = 'sidebar', onNavigate }: Props) {
  // Hoy lo dejamos colapsado (icon-only) pero con estado listo para expandirse
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          width: expanded ? WIDTH_EXPANDED : WIDTH_COLLAPSED,
          boxSizing: 'border-box',
          borderRight: 0,
          height: '100dvh',            // ocupa 100% alto
          display: 'flex',
          alignItems: 'stretch',
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          gap: 1,
        }}
      >
        {/* Header del Sidebar (botón para expandir en el futuro) */}
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ minHeight: 56 }}>
          <IconButton
            size="small"
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? 'Colapsar sidebar' : 'Expandir sidebar'}
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Stack>

        <Divider />

        {/* Navegación principal */}
        <List sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {NAV_ITEMS.map((item) => (
            <SidebarItem
              key={item.key}
              item={item}
              collapsed={!expanded}
              selected={item.key === currentKey}
              onClick={() => onNavigate?.(item.path)}
            />
          ))}
        </List>

        <Divider />

        {/* Zona inferior (ej: settings, perfil, logout) en el futuro */}
        <Box sx={{ py: 1 }} />
      </Box>
    </Drawer>
  );
}
