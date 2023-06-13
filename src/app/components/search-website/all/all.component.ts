import { Component } from '@angular/core';
import * as data from '../../../shared/data/component/search-website/all';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent {
  fillRatingArray: [] = [];
  unFillRatingArray: [] = [];
  public all = data.all;
  public s: any;

  constructor() {
    this.all.filter((data) => {
      this.s = data.rating;
    });
  }

  ngOnInit(): void {}
}
