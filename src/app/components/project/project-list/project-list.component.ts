import { Component } from '@angular/core';
import { Project } from '../../../shared/data/interface/product-list';
import * as projectData from '../../../shared/data/component/project/project-list';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  active = 1;
  public openTab: string = 'All';

  // data
  public ProjectLists = projectData.ProjectList;
  listUser: Project[] = [];
  filterData: any[] = this.ProjectLists;

  constructor() {}

  // data filter ALL DONE DOING
  public tabbed(val: string) {
    this.openTab = val;

    this.filterData =
      val !== 'All'
        ? this.ProjectLists.filter((data: any) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }
}
