import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { searchCity } from "../../state/weather.action";

@Component({
  selector: "swa-weather-search",
  templateUrl: "./weather-search.component.html",
  styleUrls: ["./weather-search.component.scss"],
})
export class WeatherSearchComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSearch(searchText: string = "") {
    this.store.dispatch(searchCity({ searchText: searchText }));
  }
}
