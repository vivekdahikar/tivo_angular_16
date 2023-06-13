import { Component } from '@angular/core';
import * as data from '../../../../shared/data/blog/blog';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss'],
})
export class CommentBoxComponent {
  public commentsData = data.commentsData;
}
