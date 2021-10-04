import { createAction, props } from "@ngrx/store";
import { GetLocationInfo } from "src/app/shared/models/weather/geo-location.model";

export const searchCity = createAction(
  "[Weather Search Component] Search",
  props<{ searchText: string }>()
);

export const searchCitySuccess = createAction(
  "[Weather API] Search City Weather Information Loaded Successfully",
  props<{ data: any }>()
);

export const searchCityFailed = createAction(
  "[Weather API] Search City Weather Information Loaded Error",
  props<{ error: any }>()
);

export const fetchWeatherInfo = createAction(
  "[Weather Search Component] Select City to Fetch Weather Info",
  props<{ cityInfo: GetLocationInfo }>()
);
