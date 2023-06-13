import { Component } from '@angular/core';
import * as mutual from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-mutual-friend',
  templateUrl: './mutual-friend.component.html',
  styleUrls: ['./mutual-friend.component.scss'],
})
export class MutualFriendComponent {
  public isCollapsed = false;

  public mutualFriend = mutual.mutualFriend;
}
