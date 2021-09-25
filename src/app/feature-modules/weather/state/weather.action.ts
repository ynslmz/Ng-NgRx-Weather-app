import { createAction, props } from "@ngrx/store";

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
