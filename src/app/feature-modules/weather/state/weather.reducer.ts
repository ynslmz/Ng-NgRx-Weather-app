import { Action, createReducer, on, State } from "@ngrx/store";
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
  on(actionsWeather.searchCity, (state, { searchText }) => ({
    ...state,
    searchedCityText: searchText,
  }))
);

export function weatherReducer(
  state: WeatherFeatureState | undefined,
  action: Action
) {
  return _weatherReducer(state, action);
}
