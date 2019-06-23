import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RequestService } from "../request.service";

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  newData;

  @Output() dataReceived = new EventEmitter<object>()

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
  }

  updateData() {
    this.requestService.getNewsData()
      .subscribe( data => this.newData = data);
    this.dataReceived.emit(this.newData);
    /* console.log(this.newData); */
  }
}
