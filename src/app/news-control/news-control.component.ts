import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../shared/params.service';

@Component({
  selector: 'app-news-control',
  templateUrl: './news-control.component.html',
  styleUrls: ['./news-control.component.scss']
})
export class NewsControlComponent implements OnInit {

  mode: string;
  showOptions = false;

  constructor( private paramsService: ParamsService) {
    this.paramsService.paramsChanged.subscribe(
      (response: { mode: string, params: {} } ) => {
        this.mode = response.mode;
      }
    );
  }

  ngOnInit() {
    this.paramsService.emitParams();
  }

  onChangeMode() {
    if (this.mode === 'top-headlines') {
      this.mode = 'everything';
    } else {
      this.mode = 'top-headlines';
    }
    this.paramsService.changeMode(this.mode);
  }

}
