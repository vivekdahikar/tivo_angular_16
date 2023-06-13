import { Component } from '@angular/core';
import * as userData from '../../../../shared/data/component/user/user';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss'],
})
export class RightContentComponent {
  public userPost = userData.userPost;
  public userPost2 = userData.userPost2;
}
