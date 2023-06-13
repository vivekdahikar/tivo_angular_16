import { Component } from '@angular/core';
import * as userData from '../../../shared/data/component/user/user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent {
  public userCards = userData.userCards;
}
