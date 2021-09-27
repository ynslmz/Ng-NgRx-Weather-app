import { createSelector } from "@ngrx/store";

export const selectFeature = (state: any) => state.weather;

export const selectcityGeoInfos = createSelector(
  selectFeature,
  (state) => state.cityGeoInfos
);
