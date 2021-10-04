import { createAction, props } from "@ngrx/store";
import { GetLocationInfo } from "src/app/shared/models/weather/geo-location.model";
import { GetWeatherInfoWithCoordinates } from "src/app/shared/models/weather/weather.model";

export const searchCity = createAction(
  "[Weather Search Component] Search",
  props<{ searchText: string }>()
);

export const searchCitySuccess = createAction(
  "[Weather API] Search City Weather Information Loaded Successfully",
  props<{ data: GetLocationInfo[] }>()
);

export const searchCityFailed = createAction(
  "[Weather API] Search City Weather Information Loaded Error",
  props<{ error: any }>()
);

export const fetchWeatherInfo = createAction(
  "[Weather Search Component] Select City to Fetch Weather Info",
  props<{ cityInfo: GetLocationInfo }>()
);

export const fetchWeatherInfoSuccess = createAction(
  "[Weather Search Component] Select City to Fetch Weather Info Loaded Successfully",
  props<{ data: GetWeatherInfoWithCoordinates }>()
);

export const fetchWeatherInfoFailed = createAction(
  "[Weather Search Component] Select City to Fetch Weather Info Loaded Error",
  props<{ error: any }>()
);
