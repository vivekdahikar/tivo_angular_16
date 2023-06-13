import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-comment-two',
  templateUrl: './comment-two.component.html',
  styleUrls: ['./comment-two.component.scss'],
})
export class CommentTwoComponent {
  replyMassage: any;
  public massages = data.massages2;
}
