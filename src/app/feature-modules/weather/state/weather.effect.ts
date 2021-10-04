import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  searchCity,
  searchCityFailed,
  searchCitySuccess,
} from "./weather.action";
import {
  catchError,
  debounceTime,
  map,
  mergeMap,
  filter,
} from "rxjs/operators";
import { of } from "rxjs";
import { GeoLocationService } from "src/app/shared/services/weather/geo-location.service";

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private geoLocationService: GeoLocationService
  ) {}

  getCityCordinates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCity),
      debounceTime(300),
      filter((action) => action.searchText.length > 2),
      mergeMap((action) =>
        this.geoLocationService
          .gerCoordinatesByCityName(action.searchText)
          .pipe(
            map(
              (data) => searchCitySuccess({ data }),
              catchError((error) => of(searchCityFailed({ error })))
            )
          )
      )
    )
  );
}
