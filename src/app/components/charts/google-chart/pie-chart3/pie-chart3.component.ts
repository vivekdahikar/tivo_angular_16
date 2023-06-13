import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-pie-chart3',
  templateUrl: './pie-chart3.component.html',
  styleUrls: ['./pie-chart3.component.scss'],
})
export class PieChart3Component {
  public pieChart2 = chartData.pieChart2;
}
