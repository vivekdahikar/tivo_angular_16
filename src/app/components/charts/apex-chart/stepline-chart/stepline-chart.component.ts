import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/apex';

@Component({
  selector: 'app-stepline-chart',
  templateUrl: './stepline-chart.component.html',
  styleUrls: ['./stepline-chart.component.scss'],
})
export class SteplineChartComponent {
  public steplineChart = chartData.steplineChart;
}
