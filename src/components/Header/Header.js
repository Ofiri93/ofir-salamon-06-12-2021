import IconButton from "@mui/material/IconButton";
import Star from "@mui/icons-material/Star";
import Home from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./Header.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

export default function Header() {
  return (
    <div className="header-weather-app">
      <label className="header-title">Herolo Weather task</label>
      <ThemeProvider theme={theme}>
        <Link to="/Favorites">
          <IconButton
            color="neutral"
            aria-label="upload picture"
            component="span"
          >
            <Star />
          </IconButton>
        </Link>
        <Link to="/">
          <IconButton
            color="neutral"
            aria-label="upload picture"
            component="span"
          >
            <Home />
          </IconButton>
        </Link>
      </ThemeProvider>
    </div>
  );
}
