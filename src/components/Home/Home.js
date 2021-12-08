import { TextField } from "@mui/material";
import { useEffect } from "react";
import "./Home.css";

export default function Home() {
  
    useEffect(() => {
    fetch(
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=R63JYR9Hv2PP2nWP7eI8eAYm6xTXiYxq"
    )
      .then((response) => response.json())
      .then((data) => console.log(data.DailyForecasts));
  }, []);

  return (
    <div className="favorite-weather-app">
      <TextField
        style={{ width: "400px" }}
        id="outlined-basic"
        label="search"
        variant="standard"
      />
    </div>
  );
}
