import { deepPurple, blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple.A400
    },
    secondary: {
      main: blue[500]
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;