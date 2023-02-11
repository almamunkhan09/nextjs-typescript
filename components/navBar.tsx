'use client';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import {
  Alert,
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { width } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import AlertDialog from './AlertDialog';
import Footer from './Footer';
import {
  ecomName,
  menu,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './props';

export default function NavBar(): React.ReactElement {
  const [darkMode, setDarkMode] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setDarkMode(!darkMode);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <AlertDialog />
        <AppBar>
          <Stack>
            <Toolbar>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Link href={'/'}>
                    <Image src="/kkom.png" width={50} height={50} alt="KKOM" />{' '}
                  </Link>
                </Grid>
                <Grid
                  item
                  xs={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link href="/" style={{ textDecoration: 'none' }}>
                    <Typography variant="h5" letterSpacing={3}>
                      {ecomName}
                    </Typography>
                  </Link>
                </Grid>

                <Grid
                  item
                  xs={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Grid container>
                    <Grid
                      item
                      xs={10}
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                      ml="auto"
                    >
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </Search>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                      ml="auto"
                    >
                      <IconButton onClick={handleClick}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>{' '}
          </Stack>
          <Stack
            flexGrow={1}
            alignItems={'center'}
            justifyContent="flex-end"
            flexDirection={'row'}
          >
            <Toolbar>
              <List sx={{ merginLeft: 'auto' }}>
                <Stack
                  flexDirection="row"
                  flexGrow={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  {menu.map((item) => {
                    return (
                      <Link
                        key={item}
                        href={item === 'Home' ? `/` : `/${item}`}
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        {' '}
                        <ListItemButton>{item}</ListItemButton>
                      </Link>
                    );
                  })}
                  <Link href={'/MyCart'}>
                    <AddShoppingCartIcon />{' '}
                  </Link>
                </Stack>
              </List>
            </Toolbar>
          </Stack>

          <Snackbar
            ContentProps={{
              sx: {
                display: 'block',
                textAlign: 'center',
              },
            }}
            sx={{ backgroundColor: 'primary' }}
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            autoHideDuration={2000}
            onClose={handleClose}
            // message={darkMode ? 'Dark Mode' : 'Light Mode'}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Alert>
          </Snackbar>
        </AppBar>
      </Box>
    </Container>
  );
}
