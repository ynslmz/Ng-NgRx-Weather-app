import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { GetLocationInfo } from "src/app/shared/models/weather/geo-location.model";
import { fetchWeatherInfo, searchCity } from "../../state/weather.action";
import { selectCityGeoInfos } from "../../state/weather.selector";

@Component({
  selector: "swa-weather-search",
  templateUrl: "./weather-search.component.html",
  styleUrls: ["./weather-search.component.scss"],
})
export class WeatherSearchComponent implements OnInit {
  cityInfos$: Observable<Array<GetLocationInfo> | undefined> = this.store
    .select(selectCityGeoInfos)
    .pipe(filter((dat) => dat != undefined));

  selectedCity: any = null;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSearch(searchText: string) {
    this.store.dispatch(searchCity({ searchText: searchText }));
  }

  selectionChanged() {
    this.store.dispatch(fetchWeatherInfo({ cityInfo: this.selectedCity[0] }));
  }
}
