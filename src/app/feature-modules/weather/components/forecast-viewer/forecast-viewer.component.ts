import { Component, Input, OnInit } from "@angular/core";
import { Daily } from "src/app/shared/models/weather/weather.model";

@Component({
  selector: "swa-forecast-viewer",
  templateUrl: "./forecast-viewer.component.html",
  styleUrls: ["./forecast-viewer.component.scss"],
})
export class ForecastViewerComponent implements OnInit {
  @Input() forecast!: Daily[];

  constructor() {}

  ngOnInit(): void {}

  trackBy(index: number, name: Daily): number {
    return name.dt;
  }
}
