import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { WeatherModels } from "src/app/shared/models/weather/weather.model";
import { selectCityWeatherInformation } from "../../state/weather.selector";

@Component({
  selector: "swa-current-weather-viewer",
  templateUrl: "./current-weather-viewer.component.html",
  styleUrls: ["./current-weather-viewer.component.scss"],
})
export class CurrentWeatherViewerComponent implements OnInit {
  weather$: Observable<
    WeatherModels.GetWeatherInfoWithCoordinates | undefined
  > = this.store
    .select(selectCityWeatherInformation)
    .pipe(filter((data) => data != undefined));

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
