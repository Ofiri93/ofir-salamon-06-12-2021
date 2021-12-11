import "./App.css";
import reducer from "./redux/reducer";
import fetchData from "./fetchData";
import { useEffect, useReducer } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import theme from "./theme";
// const API_KEY = "TakPQd2dhAo27AdPpqAjhbpe9kkAFQb9";

const initialState = {
  favoritesList: [],
  currentCity: [],
  currentWeather: [],
  searchOptions:[],
  currentCityId: "215854",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData(dispatch,state.currentCityId) 
  },[]);
  
  return (
    <div className="App">
      <Dashboard state={state} dispatch={dispatch} theme={theme} />
    </div>
  );
}

export default App;
