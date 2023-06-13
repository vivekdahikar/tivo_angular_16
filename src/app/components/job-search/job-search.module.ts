import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { ApplyComponent } from './apply/apply.component';
import { EducationComponent } from './apply/education/education.component';
import { ExperienceComponent } from './apply/experience/experience.component';
import { PersonalDetailsComponent } from './apply/personal-details/personal-details.component';
import { UploadFilesComponent } from './apply/upload-files/upload-files.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jobDetail } from 'src/app/shared/data/component/job-search/job-search';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobApplyComponent } from './job-details/job-apply/job-apply.component';

@NgModule({
  declarations: [
    ApplyComponent,
    EducationComponent,
    ExperienceComponent,
    PersonalDetailsComponent,
    UploadFilesComponent,
    CardsViewComponent,
    JobFilterComponent,
    JobDetailsComponent,
    JobApplyComponent,
    ListViewComponent,
  ],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class JobSearchModule {}
