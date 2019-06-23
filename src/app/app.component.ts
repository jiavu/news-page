import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newsData: object;

  onDataReceived(newData: object) {
    this.newsData = newData;
  }

}