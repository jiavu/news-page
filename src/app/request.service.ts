import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  /* url = 'https://newsapi.org/v2/'; */
  url = '/assets/dummyData.json';
  query = '?';
  key = '';

  constructor(
    private http: HttpClient
  ) {}

  setParam(paramName, paramValue) {
  }

  getNewsData() {
    return this.http.get(this.url);
  }
}
