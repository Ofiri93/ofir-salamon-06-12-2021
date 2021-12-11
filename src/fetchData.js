const API_KEY = "rmJ4kmQSpi0gqd2F3DKDiHoZOibxkEDp";

export default async function fetchData(dispatch, input, action) {
  if (action != "autocomplete") {
    dispatch({
      type: "set-current-city-id",
      payload: { input },
    });
    await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${input}?apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "set-current-weather",
          payload: { data },
        });
      }) .catch(rejected => {
        console.log(rejected);
    });
     
    await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${input}?apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "set-current-city",
          payload: { data },
        });
      }) .catch(rejected => {
        console.log(rejected);
    });
  }
  if (action == "autocomplete") {
    await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "get-search-list",
          payload: { data },
        });
      }) .catch(rejected => {
        console.log(rejected);
    });
  }
}
