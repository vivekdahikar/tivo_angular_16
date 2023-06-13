import { Component } from '@angular/core';
import { log } from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss'],
})
export class ActivityLogComponent {
  public todays: any[] = [];

  constructor() {
    this.todays = log.todayData;
  }
}
