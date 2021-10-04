import { Action, createReducer, on, State } from "@ngrx/store";
import { GetLocationInfo } from "src/app/shared/models/weather/geo-location.model";
import * as actionsWeather from "./weather.action";
export interface WeatherFeatureState {
  cityGeoInfos: any[];
  searchedCityText: string;
}
export const initialState: WeatherFeatureState = {
  cityGeoInfos: [],
  searchedCityText: "",
};

const _weatherReducer = createReducer<WeatherFeatureState, Action>(
  initialState,

  on(actionsWeather.searchCitySuccess, (state, { data }) => ({
    ...state,
    cityGeoInfos: data,
  })),

  on(actionsWeather.searchCity, (state, { searchText }) => {
    if (searchText.length == 0) {
      return { ...state, searchedCityText: "", cityGeoInfos: [] };
    } else {
      return {
        ...state,
        searchedCityText: searchText,
      };
    }
  }),

  on(actionsWeather.fetchWeatherInfo, (state, { cityInfo }) => {
    return { ...state, fetchedCityInfo: cityInfo };
  })
);

export function weatherReducer(
  state: WeatherFeatureState | undefined,
  action: Action
) {
  return _weatherReducer(state, action);
}
