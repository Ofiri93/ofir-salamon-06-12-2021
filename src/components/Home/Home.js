import { Autocomplete, TextField } from "@mui/material";
import error from "../../error/error";
import WeatherDashboard from "../WeatherDashboard/WeatherDashboard";
import fetchData from "../../fetchData";
import "./Home.css";
import { useEffect, useState } from "react";

export default function Home(props) {
  var array = new Array(Object.keys(props.searchOptions).length).fill(null);
  const [highlight, setHighlight] = useState();

  Object.keys(props.searchOptions).map((key, index) => {
    array[index] = key;
  });
  useEffect(() => {
    if (highlight === undefined) return;
    var locationKey = props.searchOptions[highlight][0].locationKey;
    fetchData(props.dispatch, locationKey, "");
  }, [highlight]);
  return (
    <div className="home-weather-app">
      <span id="message"></span>
      <Autocomplete
        id="combo-box-demo"
        options={array}
        onInputChange={(_, newInputValue) => {
          if (newInputValue) {
            let res = /^[a-zA-Z ]+$/.test(newInputValue);
            error(res);
            fetchData(props.dispatch, newInputValue, "autocomplete");
          }
        }}
        highlight={highlight}
        onHighlightChange={(_, newHighlight, reason) => {
          if (reason === "keyboard" || reason === "mouse") {
            setHighlight(newHighlight);
          }
        }}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="home-weather-search"
            style={{ width: "400px", margin: "20px 0 20px 0" }}
            id="outlined-basic"
            label="search"
            variant="standard"
          />
        )}
      />
      <WeatherDashboard
        currentCityId={props.currentCityId}
        dispatch={props.dispatch}
        favorites={props.favorites}
        currentWeather={props.currentWeather}
        currentCity={props.currentCity}
      />
    </div>
  );
}
