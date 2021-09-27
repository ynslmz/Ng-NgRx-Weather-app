import { Action, createReducer, on, State } from "@ngrx/store";
import * as actionsWeather from "./weather.action";

export const initialState: any = {
  cityGeoInfos: [],
};

const _weatherReducer = createReducer(
  initialState,
  on(actionsWeather.searchCitySuccess, (state, { data }) => ({
    ...state,
    cityGeoInfos: data,
  }))
);

export function weatherReducer(state: State<any> | undefined, action: Action) {
  return _weatherReducer(state, action);
}
