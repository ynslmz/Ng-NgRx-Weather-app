import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  fetchWeatherInfo,
  fetchWeatherInfoFailed,
  fetchWeatherInfoSuccess,
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
import { WeatherService } from "src/app/shared/services/weather/weather.service";

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private geoLocationService: GeoLocationService,
    private weatherService: WeatherService
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

  getWeatherInfoOfCoordinates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchWeatherInfo),
      mergeMap((action) =>
        this.weatherService
          .getWeatherInfoWithCoordinates(
            action.cityInfo.lat,
            action.cityInfo.lon
          )
          .pipe(
            map((data) => fetchWeatherInfoSuccess({ data: data })),
            catchError((error) => of(fetchWeatherInfoFailed({ error })))
          )
      )
    )
  );
}
