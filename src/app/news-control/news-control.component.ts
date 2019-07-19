import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-news-control',
  templateUrl: './news-control.component.html',
  styleUrls: ['./news-control.component.scss']
})
export class NewsControlComponent implements OnInit {

  showOptions = false;

  constructor() { }

  ngOnInit() {
  }

}
