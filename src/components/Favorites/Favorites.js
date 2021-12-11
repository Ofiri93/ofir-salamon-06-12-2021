import { Card } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import fetchData from "../../fetchData";
import { Link } from "react-router-dom";
import "./Favorites.css";

export default function Favorites(props) {
  return (
    <div className="favorite-weather-app">
      {Object.keys(props.state.favoritesList).length !=0 && Object.keys(props.state.favoritesList).map((item, index) => {
        return (
          <div>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() =>
                fetchData(
                  props.dispatch,
                  props.state.favoritesList[item][0].locationId,
                  ""
                )
              }
            >
              <Card key={index} className="card-weather-favorites">
                <div
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                  }}
                >
                  <label>{props.state.favoritesList[item][0].city}</label>
                  <label>
                    {props.state.favoritesList[item][0].temp}
                    {"\xB0C"}
                  </label>
                </div>
                <label style={{ flex: "2" }}>
                  {props.state.favoritesList[item][0].textWeather}
                </label>
              </Card>
            </Link>
            <Favorite className='favorites-icon-page'
              sx={{ color: "#035ce1d4", zIndex: "99999999" , cursor: 'pointer',  transform: 'scale(1)', transition: 'all 0.3s' }}
              onClick={() => {
                var city = props.state.favoritesList[item][0].city;
                props.dispatch({
                  type: "remove-from-favorites",
                  payload: { city },
                });
              }}
            />
          </div>
        );
      })}
      {Object.keys(props.state.favoritesList).length ===0 && <label className={'no-favorites-option'}>No favorites yet</label>}
    </div>
  );
}
