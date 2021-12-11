export default function reducer(
  state = {
    favoritesList: [],
    currentCity: [],
    currentWeather: [],
    searchOptions: [],
    currentCityId: "215854",
  },
  action
) {
  switch (action.type) {
    case "get-search-list":
      state.searchOptions = [];
      var optionsArray = [...action.payload.data];
      optionsArray.map((item, index) => {
        state.searchOptions[item.LocalizedName] = [];
        state.searchOptions[item.LocalizedName].push({
          name: item.LocalizedName,
          locationKey: item.Key,
        });
      });
      return { ...state };
    case "set-current-city":
      state.currentCity = [];
      state.currentCity = [...action.payload.data.DailyForecasts];
      return { ...state, currentCity: [...state.currentCity] };
    case "set-current-city-id":
      state.currentCityId = [action.payload.input];
      return { ...state, currentCityId: [state.currentCityId] };
    case "set-current-weather":
      if (state.currentWeather) {
        state.currentWeather = [];
      }
      state.currentWeather = [...action.payload.data];
      return { ...state, currentWeather: [...state.currentWeather] };
    case "add-to-favorites":
      state.favoritesList[action.payload.newFav.city] = [];
      state.favoritesList[action.payload.newFav.city].push({
        city: action.payload.newFav.city,
        textWeather: action.payload.newFav.textWeather,
        temp: action.payload.newFav.temp,
        locationId: action.payload.newFav.locationId,
      });
      return { ...state };
    case "remove-from-favorites":
      delete state.favoritesList[action.payload.city];
      return { ...state };
      // return { ...state , favoritesList: [...state.favoritesList]};
    default:
      throw new Error();
  }
}
