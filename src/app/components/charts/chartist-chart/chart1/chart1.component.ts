import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/chartist';
import { Configuration } from 'ng-chartist';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss'],
})
export class Chart1Component {
  public configuration = chartData.configuration;
}
