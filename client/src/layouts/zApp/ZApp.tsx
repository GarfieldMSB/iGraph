import { Box, Toolbar } from '@mui/material'
import Sidebar from './Sidebar/Sidebar'
import { Navbar } from './Navbar/Navbar'

export const ZApp = () => {
  return (
    <>
        <Box sx={{ display: 'flex'}}>
            <Sidebar />
            <Navbar />
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar />
            </Box>
        </Box>
    </>
  )
}
