import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  /* Der ParamsService soll den localStorage lesen und die Parameter
  hier setzen. Wenn keine vorhanden sind, soll country bzw. language
  auf die Browser-Einstellung gesetzt werden
  (bzw. über das location api abgefragt werden). */

  mode = 'top-headlines';

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

  /**
   * Sets properties of this.params
   * @param mode - 'top-headlines' or 'everything'
   * @param params - object containing param(s)
   */
  setParams(mode: string, params: {}) {
    Object.assign(this.params[mode], params);
    this.mode = mode;
    console.log(this.params[mode]);
  }

  getQuery() {
    if ( this.isValidQuery() ) {
      let query = '';
      const keys = Object.keys(this.params[this.mode]);
      keys.forEach( key => {
        const value = this.params[this.mode][key];
        if (value) {
          if (query.length) { query += '&'; }
          query += key + '=' + value;
        }
      });
      return this.mode + '?' + query;
    } else { return false; }
  }

  isValidQuery() {
    // wann und wo die Validation? Je nach mode sind params required...
    switch (this.mode) {
      case 'top-headlines':
        if (
          !this.params['top-headlines'].language &&
          !this.params['top-headlines'].country &&
          !this.params['top-headlines'].category &&
          !this.params['top-headlines'].sources &&
          !this.params['top-headlines'].q
        ) { return false; }
        return true;
      case 'everything':
        if (
          !this.params.everything.sources &&
          !this.params.everything.domains &&
          !this.params.everything.q
        ) { return false; }
        return true;
    }
  }
}
