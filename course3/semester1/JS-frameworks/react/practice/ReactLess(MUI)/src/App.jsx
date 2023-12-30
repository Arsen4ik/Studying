import './App.scss';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { ArrowBack, Menu } from '@mui/icons-material'

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton aria-label='menu'>
            <Menu />
          </IconButton>
          <Typography sx={{ flexGrow: 1, }}>Header</Typography>
          <Box sx={{ display: 'flex', gap: '10px', }}>
            <Button variant='contained' color='success'>Auth</Button>
            <Button variant='outlined' color='secondary' endIcon={<ArrowBack></ArrowBack>}>Auth</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
