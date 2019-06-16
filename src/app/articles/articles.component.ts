import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  styles: [`
    img { height: 150px; }
  `]
})
export class ArticlesComponent implements OnInit {

  @Input() data: object;

  constructor() {
  }

  ngOnInit() {
  }

}
