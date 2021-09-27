import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { searchCity } from "../../state/weather.action";
import { selectcityGeoInfos } from "../../state/weather.selector";

@Component({
  selector: "swa-weather-search",
  templateUrl: "./weather-search.component.html",
  styleUrls: ["./weather-search.component.scss"],
})
export class WeatherSearchComponent implements OnInit {
  cityInfos$ = this.store.select(selectcityGeoInfos);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSearch(searchText: string = "") {
    this.store.dispatch(searchCity({ searchText: searchText }));
  }
}
