import { Component } from '@angular/core';

import { RequestService } from '../shared/request.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})

export class UpdateDataComponent {

  constructor(
    private requestService: RequestService
  ) { }

  updateData() {
    this.requestService.getNewsData();
    /* Set a timeout for the button being
    deactivated after request!
    Requests limited to 500 per day. */
  }
}
