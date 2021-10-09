import { createSelector } from "@ngrx/store";
import { WeatherFeatureState } from "./weather.reducer";

export const selectFeature = (state: any) => state.weather;

export const selectCityGeoInfos = createSelector(
  selectFeature,
  (state: WeatherFeatureState) => state.cityGeoInfos
);

export const selectCityWeatherInformation = createSelector(
  selectFeature,
  (state: WeatherFeatureState) => state.fetchedCityInfo
);

export const selectUnits = createSelector(
  selectFeature,
  (state: WeatherFeatureState) => state.unit
);
