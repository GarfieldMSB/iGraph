import * as React from 'react';
import { Tooltip, ListItemButton, ListItemIcon } from '@mui/material';
import { type NavItem } from './nav.config';

type Props = {
    item: NavItem;
    selected?: boolean;
    collapsed?: boolean; // reservado para futuro (texto vs icon-only)
    onClick?: () => void;
};

export default function SidebarItem({ item, selected, collapsed = true, onClick }: Props) {
    const Icon = item.icon;

    // Cuando esté expandido, aquí agregarás <ListItemText primary={item.label} />
    const content = (
        <ListItemButton
            selected={selected}
            onClick={onClick}
            sx={{
                justifyContent: 'center', // centrado porque estamos icon-only
                borderRadius: 2,
                my: 0.5,
                minHeight: 44,
                '&.Mui-selected': {
                    bgcolor: 'action.selected',
                },
            }}
            aria-label={item.label}
        >
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                <Icon fontSize="medium" />
            </ListItemIcon>
        </ListItemButton>
    );

    return collapsed ? (
        <Tooltip title={item.label} placement="right">
            {content}
        </Tooltip>
    ) : (
        content
    );
}
