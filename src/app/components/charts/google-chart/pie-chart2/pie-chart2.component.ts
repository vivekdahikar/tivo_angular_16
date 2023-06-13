import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.scss'],
})
export class PieChart2Component {
  public pieChart3 = chartData.pieChart3;
}
