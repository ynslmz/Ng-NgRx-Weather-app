import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ConfigService } from "./config.service";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  get<T>(path: string, params: any): Observable<T> {
    return this.httpClient
      .get<T>(`${this.configService.getPath()}/${path}`, {
        observe: "response",
        params: params,
      })
      .pipe(map((res) => res.body || ({} as T)));
  }
}
