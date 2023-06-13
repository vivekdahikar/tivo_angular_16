import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-sizing-table',
  templateUrl: './common-sizing-table.component.html',
  styleUrls: ['./common-sizing-table.component.scss'],
})
export class CommonSizingTableComponent {
  @Input() table: any;
}
