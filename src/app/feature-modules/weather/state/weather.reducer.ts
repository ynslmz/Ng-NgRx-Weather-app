import { Action, createReducer, on, State } from "@ngrx/store";
import { increment, decrement, reset } from "./weather.action";

export const initialState: any = 0;

const _weatherReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function weatherReducer(state: State<any> | undefined, action: Action) {
  return _weatherReducer(state, action);
}
