import { Component } from '@angular/core';
import * as latest from '../../../shared/data/component/faq/faq';

@Component({
  selector: 'app-latest-articles-and-videos',
  templateUrl: './latest-articles-and-videos.component.html',
  styleUrls: ['./latest-articles-and-videos.component.scss'],
})
export class LatestArticlesAndVideosComponent {
  public articlesAndVideos = latest.articlesAndVideos;
}
