import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-inverse-primary-bg',
  templateUrl: './inverse-primary-bg.component.html',
  styleUrls: ['./inverse-primary-bg.component.scss'],
})
export class InversePrimaryBgComponent {
  public table = data.tableData3;
}
