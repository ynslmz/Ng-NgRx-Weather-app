import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { WeatherModels } from "src/app/shared/models/weather/weather.model";
import { sortHourlyForecastData } from "../../state/weather.action";

@Component({
  selector: "swa-forecast-hourly-view",
  templateUrl: "./forecast-hourly-view.component.html",
  styleUrls: ["./forecast-hourly-view.component.scss"],
})
export class ForecastHourlyViewComponent implements OnInit {
  @Input() forecast!: WeatherModels.Hourly[];
  slice: number = 5;

  constructor(private store: Store) {}

  ngOnInit(): void {}
  sortData(e: any) {
    this.store.dispatch(sortHourlyForecastData({ data: e }));
  }
}
