import { Injectable, OnDestroy } from "@angular/core";
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
import { of, Subscription } from "rxjs";
import { GeoLocationService } from "src/app/shared/services/weather/geo-location.service";
import { WeatherService } from "src/app/shared/services/weather/weather.service";
import { Store } from "@ngrx/store";
import { selectUnits } from "./weather.selector";

@Injectable()
export class WeatherEffects implements OnDestroy {
  units!: string;
  subs: Subscription;
  constructor(
    private actions$: Actions,
    private geoLocationService: GeoLocationService,
    private weatherService: WeatherService,
    private store: Store
  ) {
    this.subs = this.store.select(selectUnits).subscribe((res) => {
      this.units = res;
      console.log("Unit Changed > " + res);
    });
  }
  ngOnDestroy(): void {
    if (!!this.subs) {
      this.subs.unsubscribe();
      console.log("Unsubscribed!");
    }
  }
  getCityCordinates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchCity),
      debounceTime(300),
      filter((action) => action.searchText.length > 2),
      mergeMap((action) =>
        this.geoLocationService
          .gerCoordinatesByCityName({
            q: action.searchText,
            units: this.units,
            limit: 5,
          })
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
          .getWeatherInfoWithCoordinates({
            lat: action.cityInfo.lat,
            lon: action.cityInfo.lon,
            units: this.units,
            exclude: "minutely",
          })
          .pipe(
            map((data) => fetchWeatherInfoSuccess({ data: data })),
            catchError((error) => of(fetchWeatherInfoFailed({ error })))
          )
      )
    )
  );
}
