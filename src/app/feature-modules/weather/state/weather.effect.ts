import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WeatherService } from "src/app/shared/services/weather.service";
import {
  searchCity,
  searchCityFailed,
  searchCitySuccess,
} from "./weather.action";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  loadCityInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCity),
      mergeMap((action) =>
        this.weatherService.searchCityWithName(action.searchText).pipe(
          map(
            (data) => searchCitySuccess({ data }),
            catchError((error) => of(searchCityFailed({ error })))
          )
        )
      )
    )
  );
}
