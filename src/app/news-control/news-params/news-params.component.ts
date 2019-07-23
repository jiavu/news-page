import { Component, OnInit } from '@angular/core';

import { ParamsService } from 'src/app/shared/params.service';

@Component( {
  selector: 'app-news-params',
  templateUrl: './news-params.component.html',
  styleUrls: ['./news-params.component.scss']
})
export class NewsParamsComponent implements OnInit {

  /* Die params und der mode sollen bei OnInit vom
  paramsService gezogen werden. */

  mode: string;
  params: {};

  constructor( private paramsService: ParamsService) {

    this.paramsService.paramsChanged.subscribe(
      (response: { mode: string, params: {} } ) => {
        this.mode = response.mode;
        this.params = response.params;
        for (const param in this.params) {
          if (this.params.hasOwnProperty(param)) {
            if (!this.params[param]) {
              this.params[param] = 'all';
            }
          }
        }
      }
    );
  }

  ngOnInit() {
    this.paramsService.emitParams();
  }

  updateParam(event: Event) {
    const target = ( event.target as HTMLInputElement);

    // das ganze params Object senden?
    // this.paramsService.setParams('everything', this.params);

    // oder nur den aktualisierten Parameter:
    this.paramsService.changeParams(this.mode, {
      [target.name]: target.value !== 'all' ? target.value : null
    });
  }

}
