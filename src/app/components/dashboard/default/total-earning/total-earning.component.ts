import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/dashboard/default/default';

@Component({
  selector: 'app-total-earning',
  templateUrl: './total-earning.component.html',
  styleUrls: ['./total-earning.component.scss'],
})
export class TotalEarningComponent {
  public earningchart = chartData.earningchart;
}
