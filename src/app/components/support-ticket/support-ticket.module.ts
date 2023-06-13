import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupportTicketComponent } from './support-ticket.component';

@NgModule({
  declarations: [TicketComponent, SupportTicketComponent],
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
  ],
})
export class SupportTicketModule {}
