import { createAction, props } from "@ngrx/store";

export const searchCity = createAction(
  "[Weather Search Component] Search",
  props<{ searchText: string }>()
);
