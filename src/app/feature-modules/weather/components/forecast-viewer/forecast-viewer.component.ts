import { Component, Input, OnInit } from "@angular/core";
import { WeatherModels } from "src/app/shared/models/weather/weather.model";

@Component({
  selector: "swa-forecast-viewer",
  templateUrl: "./forecast-viewer.component.html",
  styleUrls: ["./forecast-viewer.component.scss"],
})
export class ForecastViewerComponent implements OnInit {
  @Input() forecast!: WeatherModels.Daily[];

  constructor() {}

  ngOnInit(): void {}

  trackBy(index: number, name: WeatherModels.Daily): number {
    return name.dt;
  }
}
