import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-chart8',
  templateUrl: './chart8.component.html',
  styleUrls: ['./chart8.component.scss'],
})
export class Chart8Component {
  public chart8 = chartData.chart8;
}
