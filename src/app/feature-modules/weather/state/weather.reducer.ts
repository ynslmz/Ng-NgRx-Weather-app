import { Action, createReducer, on } from "@ngrx/store";
import { GetLocationInfo } from "src/app/shared/models/weather/geo-location.model";
import { WeatherModels } from "src/app/shared/models/weather/weather.model";
import * as actionsWeather from "./weather.action";

export interface WeatherFeatureState {
  cityGeoInfos: GetLocationInfo[];
  searchedCityText: string;
  fetchedCityInfo: WeatherModels.GetWeatherInfoWithCoordinates;
  requestedCityInfo: GetLocationInfo;
  unit: string;
}
export const initialState: Partial<WeatherFeatureState> = {
  unit: "metric",
};

const _weatherReducer = createReducer<any, Action>(
  initialState,
  on(
    actionsWeather.searchCitySuccess,
    (state: WeatherFeatureState, { data }) => ({
      ...state,
      cityGeoInfos: data,
    })
  ),
  on(
    actionsWeather.searchCity,
    (state: WeatherFeatureState, { searchText }) => {
      if (searchText.length == 0) {
        return { ...state, searchedCityText: "", cityGeoInfos: [] };
      } else {
        return {
          ...state,
          searchedCityText: searchText,
        };
      }
    }
  ),

  on(
    actionsWeather.fetchWeatherInfo,
    (state: WeatherFeatureState, { cityInfo }) => {
      return { ...state, requestedCityInfo: cityInfo };
    }
  ),

  on(
    actionsWeather.fetchWeatherInfoSuccess,
    (state: WeatherFeatureState, { data }) => {
      return { ...state, fetchedCityInfo: data };
    }
  ),

  on(
    actionsWeather.sortDailyForecastData,
    (state: WeatherFeatureState, { data }) => {
      let direction = data.direction == "asc" ? 1 : -1;
      let newDaily = [...state.fetchedCityInfo.daily];
      newDaily = newDaily.sort((a, b) => {
        return (a.dt - b.dt) * direction;
      });
      return {
        ...state,
        fetchedCityInfo: {
          ...state.fetchedCityInfo,
          daily: [...newDaily],
        },
      };
    }
  ),

  on(
    actionsWeather.sortHourlyForecastData,
    (state: WeatherFeatureState, { data }) => {
      let direction = data.direction == "asc" ? 1 : -1;
      let newHourly = [...(state.fetchedCityInfo?.hourly || [])];
      newHourly = newHourly.sort((a, b) => {
        return (a.dt - b.dt) * direction;
      });
      return {
        ...state,
        fetchedCityInfo: {
          ...state.fetchedCityInfo,
          hourly: [...newHourly],
        },
      };
    }
  )
);

export function weatherReducer(state: WeatherFeatureState, action: Action) {
  return _weatherReducer(state, action);
}
