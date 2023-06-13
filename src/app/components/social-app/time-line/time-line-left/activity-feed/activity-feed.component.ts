import { Component } from '@angular/core';
import * as activity from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss'],
})
export class ActivityFeedComponent {
  public isCollapsed = false;
  public activityFeed = activity.activityFeed;
}
