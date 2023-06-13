import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-pie-chart1',
  templateUrl: './pie-chart1.component.html',
  styleUrls: ['./pie-chart1.component.scss'],
})
export class PieChart1Component {
  public pieChart4 = chartData.pieChart3;
}
