import { Action, createReducer, State } from "@ngrx/store";

export const initialState: any = {};

const _weatherReducer = createReducer(initialState);

export function weatherReducer(state: State<any> | undefined, action: Action) {
  return _weatherReducer(state, action);
}
