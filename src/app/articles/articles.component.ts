import { Component, OnInit } from '@angular/core';

import { RequestService } from '../request.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  newsData: object;

  lang = 'en-GB';  /* replace with language of browser settings */
  dateFormatOptions = {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  };

  constructor(private requestService: RequestService) {
    this.requestService.dataChanged.subscribe(
      (data: object) => this.newsData = data
    );
  }

  ngOnInit() {
    this.requestService.getNewsData();
  }

  formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString(this.lang, this.dateFormatOptions);
  }
}
