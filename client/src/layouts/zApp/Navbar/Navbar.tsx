import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { ModeToggle } from './ModeTogle'

type NavbarProps = { drawerWidth: number };

export const Navbar = ( { drawerWidth }: NavbarProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="fixed"
                elevation={0}
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    color: 'text.primary',
                    backdropFilter: 'saturate(180%) blur(10px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(10px)', // Safari
                }}  
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <ModeToggle />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
