/*
Documentation:
https://newsapi.org/docs/endpoints
*/

import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ParamsService } from './params.service';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  /* url = 'https://newsapi.org/v2/'; */
  url = '/assets/dummyData.json';

  pageSize = null;  // 20 is default, 100 is max
  page = null;  // pagination. If results found is greater than pageSize
  key = '';

  /* check: Boolean in () of EventEmitter stands
  for asynchronous?... */
  @Output() dataChanged = new EventEmitter<object>();

  constructor(
    private http: HttpClient,
    private paramsService: ParamsService
  ) {}

  getNewsData() {
    const query = this.paramsService.fetchQuery();
    if (query) {
      this.http.get(this.url).subscribe(
        (data: object) => {
          this.dataChanged.emit(data);
        },
        (error: any) => console.log(error)
      );
    } else { /* error, missing params */ }
  }
}
