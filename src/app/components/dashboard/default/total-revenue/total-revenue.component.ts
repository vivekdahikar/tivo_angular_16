import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/dashboard/default/default';

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html',
  styleUrls: ['./total-revenue.component.scss'],
})
export class TotalRevenueComponent {
  public revenuchart = chartData.revenuchart;
}
