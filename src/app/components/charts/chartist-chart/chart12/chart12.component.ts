import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-chart12',
  templateUrl: './chart12.component.html',
  styleUrls: ['./chart12.component.scss'],
})
export class Chart12Component {
  public chart12 = chartData.chart12;
}
