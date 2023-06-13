import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import * as filterData from '../../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-upcoming-course',
  templateUrl: './upcoming-course.component.html',
  styleUrls: ['./upcoming-course.component.scss'],
})
export class UpcomingCourseComponent {
  public isCollapsed3 = false;

  public upcomingCourses = filterData.upcomingCourses;
  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {}
}
