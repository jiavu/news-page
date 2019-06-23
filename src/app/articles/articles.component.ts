import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  @Input() data: object;

  lang = "en-GB";  /* replace with language of browser settings */
  dateFormatOptions = {
    year: "numeric", month: "long", day: "numeric", hour:"2-digit", minute:"2-digit"
  };

  constructor() {
  }

  ngOnInit() {
  }

  formatDate(date) {
    let dateObj = new Date(date);
    return dateObj.toLocaleDateString(this.lang, this.dateFormatOptions);
  }
}
