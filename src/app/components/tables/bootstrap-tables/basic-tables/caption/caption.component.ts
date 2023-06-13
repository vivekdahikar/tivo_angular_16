import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/component/table/tableData';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss'],
})
export class CaptionComponent {
  public table2 = data.table2;
}
