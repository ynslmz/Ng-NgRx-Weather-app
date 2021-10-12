import { Component, Input, OnInit } from "@angular/core";
import { WeatherModels } from "src/app/shared/models/weather/weather.model";

@Component({
  selector: "swa-forecast-hourly-view",
  templateUrl: "./forecast-hourly-view.component.html",
  styleUrls: ["./forecast-hourly-view.component.scss"],
})
export class ForecastHourlyViewComponent implements OnInit {
  @Input() forecast!: WeatherModels.Hourly[];

  slice: number = 5;
  sortOrder: string = "asc";

  constructor() {}

  ngOnInit(): void {}
  sortData(e: any) {
    console.log(e);
  }
}
