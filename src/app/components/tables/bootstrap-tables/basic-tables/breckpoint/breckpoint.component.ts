import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-breckpoint',
  templateUrl: './breckpoint.component.html',
  styleUrls: ['./breckpoint.component.scss'],
})
export class BreckpointComponent {
  public breckpointSpecific = data.breckpointSpecific;
}
