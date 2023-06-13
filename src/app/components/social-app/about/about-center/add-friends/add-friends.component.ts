import { Component } from '@angular/core';
import * as addFriendData from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss'],
})
export class AddFriendsComponent {
  public addFriend = addFriendData.addFriends;
}
