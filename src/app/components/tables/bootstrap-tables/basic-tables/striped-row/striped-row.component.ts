import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-striped-row',
  templateUrl: './striped-row.component.html',
  styleUrls: ['./striped-row.component.scss'],
})
export class StripedRowComponent {
  public table2 = data.table2;
}
