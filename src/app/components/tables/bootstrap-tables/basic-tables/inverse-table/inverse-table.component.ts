import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-inverse-table',
  templateUrl: './inverse-table.component.html',
  styleUrls: ['./inverse-table.component.scss'],
})
export class InverseTableComponent {
  public inverse = data.inverse;
}
