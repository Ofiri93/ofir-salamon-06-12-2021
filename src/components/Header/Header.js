import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import Home from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-weather-app">
      <label className="header-title">Herolo Weather task</label>
      <Link to="/Favorites">
        <IconButton
          sx={{ color: "#fff" }}
          aria-label="Favorites"
          component="span"
        >
          <Favorite />
        </IconButton>
      </Link>
      <Link to="/">
        <IconButton sx={{ color: "#fff" }} aria-label="Home" component="span">
          <Home dispatch={props.dispatch} />
        </IconButton>
      </Link>
    </div>
  );
}
