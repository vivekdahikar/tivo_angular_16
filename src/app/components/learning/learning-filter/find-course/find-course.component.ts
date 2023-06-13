import { Component } from '@angular/core';
import * as filterData from '../../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-find-course',
  templateUrl: './find-course.component.html',
  styleUrls: ['./find-course.component.scss'],
})
export class FindCourseComponent {
  public isCollapsed = false;

  public findCourse = filterData.findCourse;

  constructor() {}

  ngOnInit(): void {}
}
