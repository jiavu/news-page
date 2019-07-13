import { Component, OnInit } from '@angular/core';

import { RequestService } from '../request.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
  }

  updateData() {
    this.requestService.getNewsData();
  }
}
