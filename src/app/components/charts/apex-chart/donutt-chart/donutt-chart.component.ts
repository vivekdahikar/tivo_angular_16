import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/apex';

@Component({
  selector: 'app-donutt-chart',
  templateUrl: './donutt-chart.component.html',
  styleUrls: ['./donutt-chart.component.scss']
})
export class DonuttChartComponent {
  public donutChart = chartData.donutChart;

}
