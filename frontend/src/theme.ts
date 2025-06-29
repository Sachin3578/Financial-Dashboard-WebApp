import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // or 'dark'
    primary: {
      main: "#4CAF50",       // Green (used for buttons, active elements)
    },
    secondary: {
      main: "#ffffff",       // Blue (for highlights, icons)
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "",    // Page background
      paper: "#ffffff",      // Cards, forms
    },
    text: {
      primary: "#1e1e2f",    // Headings, titles
      secondary: "#555",     // Subtitles, descriptions
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
