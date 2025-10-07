import { Dashboard, InsertChart, Settings } from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';

export type NavItem = {
    key: string;
    icon: SvgIconComponent;
    label: string;
    path: string;
};

export const NAV_ITEMS: NavItem[] = [
    { key: 'home', icon: Dashboard, label: 'Resumen', path: '/dashboard' },
    { key: 'charts', icon: InsertChart, label: 'Gráficos', path: '/dashboard/charts' },
    { key: 'settings', icon: Settings, label: 'Configuración', path: '/dashboard/settings' },
];
