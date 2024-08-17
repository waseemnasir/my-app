import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(10, 10, 10, 1)",
    },
    secondary: {
      main: "rgba(10, 10, 10, 0.4)",
      dark:'#0C0129'
    },
  },
  customColors: {
    purple: "rgba(127, 95, 255, 1)",
  },
  typography: {
    fontFamily: "Outfit, Arial, sans-serif",
  },
});

export default theme;
