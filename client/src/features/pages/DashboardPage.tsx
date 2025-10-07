import { Paper, Typography, Grid as Grid, Box, Stack } from '@mui/material';
import DashboardLayout from '../dashboard/layout/DashboardLayout';
import { ModeToggle } from '../components/Navbar/ModeTogle';

export default function DashboardPage() {
    return (
        <DashboardLayout currentKey="charts" onNavigate={(path) => console.log('go →', path)}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Dashboard de gráficos
            </Typography>
            <Box sx={{ p: 3 }}>
				<Stack spacing={2} alignItems="flex-start">
					<ModeToggle />
					<Paper sx={{ p: 2 }}>
						<Typography variant="h6">Demo tema</Typography>
						<Typography color="text.secondary">
							El fondo y los textos cambian según el modo.
						</Typography>
					</Paper>
				</Stack>
			</Box>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper sx={{ p: 2, height: 300 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>Gráfico 1</Typography>
                        {/* aquí pones tu Recharts / X-Charts */}
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper sx={{ p: 2, height: 300 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>Gráfico 2</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}
