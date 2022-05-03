import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#039be5",
    },
    secondary: {
      main: "#ff9800",
    },
    "&root": {
      backgroundColor: "red",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
