import {
  AppBar,
  Box,
  List,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavbarItem } from "./NavbarItem";
import { NAV_ITEMS } from "./nav.config";
import { ModeToggle } from "./ModeTogle";

type NavbarProps = { drawerWidth: number };

export const Navbar = ({ drawerWidth }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          color: "text.primary",
          backdropFilter: "saturate(180%) blur(10px)",
          WebkitBackdropFilter: "saturate(180%) blur(10px)", // Safari
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <List>
            {NAV_ITEMS.map((item) => (
              <NavbarItem item={item}/>
            ))}
            <ListItemIcon>
              <ModeToggle />
            </ListItemIcon>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
