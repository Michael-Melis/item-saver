import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1fb6ff',
    },
    secondary: {
      main: '#19857b',
    },
    success: {
      main: '#13ce66',
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
