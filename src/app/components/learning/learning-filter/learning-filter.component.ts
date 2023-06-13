import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-filter',
  templateUrl: './learning-filter.component.html',
  styleUrls: ['./learning-filter.component.scss'],
})
export class LearningFilterComponent {
  OpenFilter: boolean = false;
  constructor() {}

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
  ngOnInit(): void {}
}
