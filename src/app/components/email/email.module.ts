import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailAppComponent } from './email-app/email-app.component';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import { MailFilterComponent } from './mail-filter/mail-filter.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    EmailAppComponent,
    EmailComposeComponent,
    MailFilterComponent,
    ReadMailComponent,
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    RouterModule,
    SharedModule,
    NgxDropzoneModule,
    FormsModule,
    CKEditorModule,
  ],
})
export class EmailModule {}
