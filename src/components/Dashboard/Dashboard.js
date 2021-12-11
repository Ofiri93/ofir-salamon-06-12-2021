import Header from "../Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import Home from "../Home/Home";

export default function Dashboard(props) {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home dispatch={props.dispatch} currentCityId ={props.state.currentCityId} searchOptions={props.state.searchOptions} currentWeather={props.state.currentWeather} favorites={props.state.favoritesList} currentCity={props.state.currentCity}/>} />
          <Route path="/Favorites" element={<Favorites state={props.state} dispatch={props.dispatch} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
