import { Box, Paper, Stack, Typography } from "@mui/material"
import { ModeToggle } from "./ModeTogle"


function App() {

  return (
    <>
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
    </>
  )
}

export default App
