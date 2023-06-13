import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../../../../shared/directive/sortable.directive';
import { Table } from '../../../../shared/data/interface/table';
import { TablesService } from '../../../../shared/services/tables/tables.srvice';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-basic-init',
  templateUrl: './basic-init.component.html',
  styleUrls: ['./basic-init.component.scss'],
  providers: [TablesService, DecimalPipe],
})
export class BasicInitComponent {
  basicTable$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: TablesService) {
    this.basicTable$ = service.basicTable$;
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
}
