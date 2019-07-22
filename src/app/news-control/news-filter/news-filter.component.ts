import { Component } from '@angular/core';

import { ParamsService } from 'src/app/shared/params.service';

@Component( {
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent {

  /* Die params und der mode sollen bei OnInit vom
  paramsService gezogen werden. */

  mode = 'top-headlines';
  params = {
    country: 'de'
  };

  constructor(
    private paramsService: ParamsService
  ) {}

  updateParam(event: Event) {
    const target = ( event.target as HTMLInputElement);

    // Validation im ParamsService? Je nach mode sind params required.

    // das ganze params Object senden?
    // this.paramsService.setParams('everything', this.params);

    // oder nur den aktualisierten Parameter:
    this.paramsService.setParams(this.mode, {
      [target.name]: target.value !== 'all' ? target.value : null
    });
  }

}
