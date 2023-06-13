import { Component } from '@angular/core';
import * as filterData from '../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-knowledge-details',
  templateUrl: './knowledge-details.component.html',
  styleUrls: ['./knowledge-details.component.scss'],
})
export class KnowledgeDetailsComponent {
  public isCollapsed = false;
  public isCollapsed2 = false;
  public Categories = filterData.Categories;
  public upcomingCourses = filterData.upcomingCourses;
  constructor() {}
  OpenFilter: Boolean = false;



  
  ngOnInit(): void {}
  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
