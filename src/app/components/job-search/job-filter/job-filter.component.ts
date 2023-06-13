import { Component } from '@angular/core';
import * as filterData from '../../../shared/data/component/job-search/job-search';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss'],
})
export class JobFilterComponent {
  OpenFilter: boolean = false;
  public filter = filterData.filter;
  public filterChackBox = filterData.filterChackBox;
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;
  public show: boolean = true;

  constructor() {}

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
  toggleShow(){
    this.show = !this.show;

  }

  ngOnInit(): void {}
}
