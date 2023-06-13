import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/apex';

@Component({
  selector: 'app-column-chart2',
  templateUrl: './column-chart2.component.html',
  styleUrls: ['./column-chart2.component.scss'],
})
export class ColumnChart2Component {
  public columnChart = chartData.columnChart;
}
