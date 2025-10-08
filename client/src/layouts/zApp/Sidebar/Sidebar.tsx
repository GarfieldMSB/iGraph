// src/features/dashboard/components/Sidebar/Sidebar.tsx
import * as React from 'react';
import { Drawer, Box, List, Divider, IconButton, Stack } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import SidebarItem from './SidebarItem';
import { NAV_ITEMS } from './nav.config';

type NavbarProps = {
    currentKey?: string;                 // para marcar el seleccionado
    onNavigate?: (path: string) => void; // usa router después
    drawerWidth: number
};

export default function Sidebar({ currentKey = 'sidebar', onNavigate, drawerWidth }: NavbarProps) {
    // Hoy lo dejamos colapsado (icon-only) pero con estado listo para expandirse
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                boxSizing: 'border-box',
                borderRight: 0,
                height: '100dvh',            // ocupa 100% alto
                display: 'flex',
                alignItems: 'stretch',
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
                <Stack direction="row" alignItems="center" justifyContent="center" sx={{ minHeight: 48 }}>
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
