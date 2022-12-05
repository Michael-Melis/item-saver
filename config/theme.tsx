// import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    primary: {
      main: '#280046',
    },
    secondary: {
      main: '#B4FAB4',
    },
    success: {
      main: '#28C76F',
    },
    error: {
      main: '#FA3E3E',
    },
    warning: {
      main: '#EF7D00',
    },
  },
});
export default getDesignTokens;
