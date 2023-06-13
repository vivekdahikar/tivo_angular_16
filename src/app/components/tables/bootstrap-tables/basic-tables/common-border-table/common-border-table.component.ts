import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-border-table',
  templateUrl: './common-border-table.component.html',
  styleUrls: ['./common-border-table.component.scss'],
})
export class CommonBorderTableComponent {
  @Input() table: any;
}
