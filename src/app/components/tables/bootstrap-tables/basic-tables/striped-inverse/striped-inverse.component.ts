import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-striped-inverse',
  templateUrl: './striped-inverse.component.html',
  styleUrls: ['./striped-inverse.component.scss'],
})
export class StripedInverseComponent {
  public table2 = data.table2;
}
