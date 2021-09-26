import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ConfigService } from "./config.service";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiKey = this.config.getApiKey();
    if (!!apiKey) {
      let paramsObj: { [key: string]: string } = {};
      request.params
        .keys()
        .forEach((key) => (paramsObj[key] = request.params.get(key) || ""));
      paramsObj["appid"] = apiKey;
      let newHttpParams = new HttpParams().appendAll(paramsObj);
      let req = request.clone({
        params: newHttpParams,
      });
      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }
}
