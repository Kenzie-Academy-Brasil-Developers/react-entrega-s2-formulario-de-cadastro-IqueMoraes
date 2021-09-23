import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#58b595",
      light: "#8ae8c6",
      dark: "#218567",
      contrastText: "#191918",
    },
    secondary: {
      main: "#f4a833",
      light: "#ffd965",
      dark: "#bd7900",
      contrastText: "#191918",
    },
    status: {
      danger: "#f44336",
    },
  },
});

export default theme;
