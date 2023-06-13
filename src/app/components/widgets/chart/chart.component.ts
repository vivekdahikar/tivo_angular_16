import { Component } from '@angular/core';
import * as chartData from '../../../shared/data/widget/widget';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  public widget1 = chartData.widget1;
  public widget2 = chartData.widget2;
  public widget3 = chartData.widget3;
}
