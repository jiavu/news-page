/*
Documentation:
https://newsapi.org/docs/endpoints
*/

import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  /* url = 'https://newsapi.org/v2/'; */
  url = '/assets/dummyData.json';
  mode = 'top-headlines';
  query = '?';
  pageSize = null;  // 20 is default, 100 is max
  page = null;  // pagination. If results found is greater than pageSize
  key = '';

  params = {
    'top-headlines': {
      /* one of them 5 required: */
      language: null,
      country: 'de', // get default country via browser infos?
      category: null,
      sources: null,  // country and category have to be excluded.
      q: null // search (simple search only?)
    },
    everything: {
      /* one of them 3 required */
      sources: null,
      domains: null,
      q: null,  // search (advanced search is possible)

      excludeDomains: null,
      from: null,   // 2019-07-14T12:51:19 (ISO 8602)
      to: null,
      language: null,
      sortBy: null  // relevancy, popularity, publishedAt
    }
  };

  /* check: Boolean in () of EventEmitter stands
  for asynchronous?... */
  @Output() dataChanged = new EventEmitter<object>();

  constructor(
    private http: HttpClient
  ) {}

  setParam(paramName, paramValue) {
  }

  getNewsData() {
    this.http.get(this.url).subscribe(
      (data: object) => {
        this.dataChanged.emit(data);
        console.log(data);
      },
      (error: any) => console.log(error)
    );
  }
}
