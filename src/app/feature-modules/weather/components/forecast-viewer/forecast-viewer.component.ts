import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { WeatherModels } from "src/app/shared/models/weather/weather.model";
import { sortDailyForecastData } from "../../state/weather.action";

@Component({
  selector: "swa-forecast-viewer",
  templateUrl: "./forecast-viewer.component.html",
  styleUrls: ["./forecast-viewer.component.scss"],
})
export class ForecastViewerComponent implements OnInit {
  @Input() forecast!: WeatherModels.Daily[];
  slice: number = 5;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  trackBy(index: number, obj: WeatherModels.Daily): number {
    return obj.dt;
  }

  sortData(e: any) {
    this.store.dispatch(sortDailyForecastData({ data: e }));
  }
}
