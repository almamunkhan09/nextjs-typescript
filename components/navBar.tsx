'use client';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  Alert,
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import AlertDialog from './AlertDialog';
import { ecomName, Search, SearchIconWrapper, StyledInputBase } from './props';

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
      <Stack>
        <AlertDialog />
        <AppBar>
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
          </Toolbar>
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
        </AppBar>{' '}
      </Stack>
    </Container>
  );
}
