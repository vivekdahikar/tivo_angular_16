import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.scss'],
})
export class Chart4Component {
  public chart4 = chartData.chart4;
}
