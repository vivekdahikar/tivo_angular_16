import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-chart11',
  templateUrl: './chart11.component.html',
  styleUrls: ['./chart11.component.scss'],
})
export class Chart11Component {
  public chart11 = chartData.chart11;
}
