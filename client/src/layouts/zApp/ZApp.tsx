import { Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";
import type { ReactNode } from "react";

type zAppProps = {
  children: ReactNode;
}

const drawerWidth = 72;

export const ZApp = ({children}: zAppProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar drawerWidth={drawerWidth} />
      <Navbar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
		  width: `calc(100% - ${drawerWidth}px)`
        }}
      >
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar /> 
          {children}
        </Box>
      </Box>
    </Box>
  );
};
