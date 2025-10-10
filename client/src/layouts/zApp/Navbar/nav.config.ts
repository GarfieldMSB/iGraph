import { AddBox, Notifications } from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';

export type NavItem = {
    key: string;
    icon: SvgIconComponent;
    label: string;
    path: string;
};

export const NAV_ITEMS: NavItem[] = [
    { key: 'createDashboard', icon: AddBox, label: 'Nuevo dashboard', path: '/dashboard/createDashboard' },
    { key: 'notifications', icon: Notifications, label: 'Notificaciones', path: '/dashboard/notifications' },
];