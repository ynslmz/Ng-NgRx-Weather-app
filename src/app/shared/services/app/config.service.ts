import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../../models/app/config.model";

@Injectable({ providedIn: "root" })
export class ConfigService {
  appConfig!: AppConfig;
  constructor(private httpClient: HttpClient) {}
  loadConfigFile(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.get("./assets/config.json").subscribe((response: any) => {
        this.appConfig = response;
        resolve(true);
      });
    });
  }

  getPath() {
    return this.appConfig?.apiPath;
  }

  getApiKey() {
    return this.appConfig?.apiKey;
  }
}
