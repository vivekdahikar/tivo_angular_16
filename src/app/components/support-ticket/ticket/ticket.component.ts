import {
  Component,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { supportDB } from 'src/app/shared/data/component/support-ticket/support-ticket';
import {
  NgbdSortableHeader2,
  SortEvent,
} from 'src/app/shared/directive/sor-table.directive';
import { SupportTicketService } from '../../../shared/services/support-ticket/support-ticket.service';
import * as data from '../../../shared/data/component/support-ticket/support-ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  countries$: Observable<supportDB[]>;
  total$: Observable<number>;

  public ticketListStatus = data.ticketListStatus;

  @ViewChildren(NgbdSortableHeader2)
  headers!: QueryList<NgbdSortableHeader2>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  deleteTicket(id: number) {
    this.countries$.subscribe((data: any) => {
      data.map((elem: any, i: any) => {
        elem.id == id && data.splice(i, 1);
      });
    });
  }
}
