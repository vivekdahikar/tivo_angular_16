import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/apex';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public pieChart = chartData.pieChart;
}
