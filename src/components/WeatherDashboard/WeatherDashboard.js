import { Card } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorderOutlined";
import weatherImg from "../../assets/weather-img.png";
import "./WeatherDashboard.css";
import { useEffect, useState } from "react";

export default function WeatherDashboard(props) {
  const city = props.currentCity[0]?.Link.split("/")[5];
  const textWeather = props.currentWeather[0]?.WeatherText;
  const temp = Math.round(props.currentWeather[0]?.Temperature.Metric.Value);
  const [isFavorite, setIsFavorite] = useState(
    Object.keys(props.favorites).includes(city)
  );

  function fToC(temp) {
    var fTemp = temp;
    var fToCel = Math.round(((fTemp - 32) * 5) / 9);
    return fToCel + "\xB0C";
  }
  useEffect(() => {
    setIsFavorite(Object.keys(props.favorites).includes(city));
  }, [city]);

  return (
    <Card className="weather-dashboard-app">
      <div className="weather-dashboard-header">
        <div className="current-weather-div">
          <img
            alt="weather-img"
            className="turn-to-relative weather-img"
            src={weatherImg}
          />
          <div className="add-to-favorites-div">
            <label className="turn-to-relative">{city}</label>
            <label className="turn-to-relative">{temp + "\xB0C"}</label>
          </div>
        </div>
        <div className="add-to-favorites-div favorite">
          {isFavorite ? (
            <Favorite
              className="favorites-icon turn-to-relative"
              sx={{ color: "#035ce1d4" }}
              onClick={() => {
                setIsFavorite(!isFavorite);
                props.dispatch({
                  type: "remove-from-favorites",
                  payload: { city },
                });
              }}
            />
          ) : (
            <FavoriteBorder
              sx={{ color: "#035ce1d4" }}
              onClick={() => {
                var newFav = {
                  city: city,
                  textWeather: textWeather,
                  temp: temp,
                  locationId: props.currentCityId
                };
                setIsFavorite(!isFavorite);
                props.dispatch({
                  type: "add-to-favorites",
                  payload: { newFav },
                });
              }}
            />
          )}
        </div>
      </div>
      <label className="turn-to-relative weather-text">{textWeather}</label>
      <div className="weather-info">
        {props.currentCity.map((item, index) => {
          var date = new Date(item.Date);
          return (
            <Card key={index} className="card-weather-dashboard">
              <label>
                {date.toLocaleString("en-US", { weekday: "short" })}
              </label>
              <label>
                {"min " + fToC(item.Temperature.Minimum.Value)}
                <br></br>
                {"max " + fToC(item.Temperature.Maximum.Value)}
              </label>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}
