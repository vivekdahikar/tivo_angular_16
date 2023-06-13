import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/component/charts/google-chart';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss'],
})
export class GoogleChartComponent {
  public pieChart = chartData.pieChart;
  public pieChart1 = chartData.pieChart1;
}
