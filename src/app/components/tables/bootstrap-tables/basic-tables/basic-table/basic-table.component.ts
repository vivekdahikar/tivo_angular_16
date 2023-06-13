import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
})
export class BasicTableComponent {
  public table = data.tableData3;
}
