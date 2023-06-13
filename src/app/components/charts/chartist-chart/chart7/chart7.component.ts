import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/chartist';

@Component({
  selector: 'app-chart7',
  templateUrl: './chart7.component.html',
  styleUrls: ['./chart7.component.scss'],
})
export class Chart7Component {
  public chart7 = chartData.chart7;
}
