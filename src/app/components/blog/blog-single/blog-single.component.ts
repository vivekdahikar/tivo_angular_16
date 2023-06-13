import { Component } from '@angular/core';
import * as Comments from '../../../shared/data/blog/blog';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss'],
})
export class BlogSingleComponent {
  public CommentsData = Comments.CommentsData;
}
