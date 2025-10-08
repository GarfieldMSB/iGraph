import { Box, Toolbar } from '@mui/material'
import Sidebar from './Sidebar/Sidebar'
import { Navbar } from './Navbar/Navbar'

const drawerWidth = 72;

export const ZApp = () => {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Sidebar drawerWidth={drawerWidth} />
				<Navbar drawerWidth={drawerWidth} />
				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					<Toolbar />
					<h1>Hola mundo</h1>
				</Box>
			</Box>
		</>
	)
}
