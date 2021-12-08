import "./App.css";
import { useEffect, useReducer } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
const API_KEY = "R63JYR9Hv2PP2nWP7eI8eAYm6xTXiYxq";

const initialState = {
  favoritesList: [],
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "add-to-favorites":
      var city = {
        title: action.payload.book.volumeInfo.title,
        image: action.payload.book.volumeInfo.imageLinks.smallThumbnail,
        count: action.payload.count,
      };
      state.favoritesList.push(city);
      return {
        favoritesList: [...state.cartBookList],
      };
    case "remove-from-favorites":
      // city = {
      //   title: action.payload.book.title,
      //   image: action.payload.book.image,
      //   count: action.payload.book.count,
      // };
      // state.favoritesList.pop(action.payload);
      return { favoritesList: [...state.favoritesList] };
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09R63JYR9Hv2PP2nWP7eI8eAYm6xTXiYxq&q=re // serach
  // "http://dataservice.accuweather.com/currentconditions/v1/235984?apikey=R63JYR9Hv2PP2nWP7eI8eAYm6xTXiYxq" // location api

  return (
    <div className="App">
      <Dashboard
        onDeleteClick={(city) => {
          dispatch({
            type: "remove-from-favorites",
            payload: { city },
          });
        }}
      />
    </div>
  );
}

export default App;
