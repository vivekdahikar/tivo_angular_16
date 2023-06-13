import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-chart9',
  templateUrl: './chart9.component.html',
  styleUrls: ['./chart9.component.scss'],
})
export class Chart9Component {
  public chart9 = chartData.chart9;
}
