import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1d3eff',
    },
    secondary: {
      main: '#ff891d',
    },
    text: {
      secondary: '#73768D',
    },
    background: {
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins, "Plus Jakarta Sans", sans-serif',
    body1: {
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          fontSize: '1.4rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#F2F2F2'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '12px'
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 1000000
        }
      }
    }
  },
});

export default theme;