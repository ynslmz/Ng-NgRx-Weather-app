import { Action, createReducer, on, State } from "@ngrx/store";
import { GetLocationInfo } from "src/app/shared/models/weather/geo-location.model";
import { GetWeatherInfoWithCoordinates } from "src/app/shared/models/weather/weather.model";
import * as actionsWeather from "./weather.action";

export interface WeatherFeatureState {
  cityGeoInfos?: GetLocationInfo[];
  searchedCityText?: string;
  fetchedCityInfo?: GetWeatherInfoWithCoordinates;
  requestedCityInfo?: GetLocationInfo;
}
export const initialState: WeatherFeatureState = {};

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
    return { ...state, requestedCityInfo: cityInfo };
  }),

  on(actionsWeather.fetchWeatherInfoSuccess, (state, { data }) => {
    return { ...state, fetchedCityInfo: data };
  })
);

export function weatherReducer(
  state: WeatherFeatureState | undefined,
  action: Action
) {
  return _weatherReducer(state, action);
}
