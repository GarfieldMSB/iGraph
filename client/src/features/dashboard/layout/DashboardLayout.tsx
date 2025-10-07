// src/features/dashboard/layout/DashboardLayout.tsx
import * as React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from '../../../layouts/zApp/Sidebar';


type Props = {
    currentKey?: string;
    onNavigate?: (path: string) => void;
    children: React.ReactNode;
};

export default function DashboardLayout({ currentKey, onNavigate, children }: Props) {
    return (
        <Box sx={{ display: 'flex', minHeight: '100dvh', bgcolor: 'background.default' }}>
            <Sidebar currentKey={currentKey} onNavigate={onNavigate} />
            <Box
                component="main"
                sx={{
                    flex: 1,
                    p: 2,
                    // deja espacio si luego agregas AppBar fixed, por ahora no hace falta
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
