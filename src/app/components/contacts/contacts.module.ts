import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsFilterComponent } from './contacts-filter/contacts-filter.component';
import { NewContactsComponent } from './new-contacts/new-contacts.component';
import { PersonalComponent } from './personal/personal.component';
import { PrintModelComponent } from './print-model/print-model.component';
import { EditFormComponent } from './personal/edit-form/edit-form.component';
import { AdressContentComponent } from './personal/edit-form/adress-content/adress-content.component';
import { GeneralComponent } from './personal/edit-form/general/general.component';
import { PersonalContentComponent } from './personal/edit-form/personal-content/personal-content.component';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ContactsFilterComponent,
    NewContactsComponent,
    PersonalComponent,
    PrintModelComponent,
    EditFormComponent,
    AdressContentComponent,
    GeneralComponent,
    PersonalContentComponent,
    ContactsComponent,
  ],
  imports: [CommonModule, ContactsRoutingModule, SharedModule],
})
export class ContactsModule {}
