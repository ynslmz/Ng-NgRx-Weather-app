import { AsyncPipe } from "@angular/common";
import {
  ChangeDetectorRef,
  Injector,
  Pipe,
  PipeTransform,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { selectUnits } from "src/app/feature-modules/weather/state/weather.selector";

@Pipe({
  name: "unit",
})
export class UnitPipe implements PipeTransform {
  unit = this.store.select(selectUnits);
  asyncPipe: AsyncPipe;
  constructor(private store: Store, private injector: Injector) {
    this.asyncPipe = new AsyncPipe(this.injector.get(ChangeDetectorRef));
  }

  transform(value: number, valueType: "temperature" | "windSpeed"): string {
    if (!value) {
      return "";
    }

    let unitText = "";

    let unt = this.asyncPipe.transform(this.unit);

    switch (valueType) {
      case "temperature":
        switch (unt) {
          case "metric":
            unitText = "°C";
            break;
          case "imperial":
            unitText = "°F";
            break;
          default:
            unitText = "°K";
            break;
        }

        break;
      case "windSpeed":
        switch (unt) {
          case "imperial":
            unitText = "mph";
            break;
          default:
            unitText = "m/s";
            break;
        }
        break;
      default:
        unitText = "";
        break;
    }
    return Math.round(Number(value)) + unitText;
  }
}
