import { Component } from '@angular/core';
import { dummyData } from "./dummyData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-page';

  data: object = dummyData;
}
