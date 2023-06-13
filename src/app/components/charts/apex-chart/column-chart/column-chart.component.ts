import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/apex';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
})
export class ColumnChartComponent {
  public columnChart2 = chartData.columnChart2;
}
