import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { CategoriesComponent } from './learning-filter/categories/categories.component';
import { FindCourseComponent } from './learning-filter/find-course/find-course.component';
import { UpcomingCourseComponent } from './learning-filter/upcoming-course/upcoming-course.component';
import { LearningListComponent } from './learning-list/learning-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogModule } from '../blog/blog.module';

@NgModule({
  declarations: [
    DetailedCourseComponent,
    LearningFilterComponent,
    CategoriesComponent,
    FindCourseComponent,
    UpcomingCourseComponent,
    LearningListComponent,
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    SharedModule,
    BarRatingModule,
    BlogModule,
    NgbModule,
  ],
  exports: [
    UpcomingCourseComponent,
    CategoriesComponent,
    LearningFilterComponent,
  ],
})
export class LearningModule {}
