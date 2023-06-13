import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { CreateNewComponent } from './create-new/create-new.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateNewComponent, ProjectListComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgxDropzoneModule,
    SharedModule,
  ],
})
export class ProjectModule {}
