import Header from "../Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import Home from "../Home/Home";

export default function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
