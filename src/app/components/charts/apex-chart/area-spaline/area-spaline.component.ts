import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/apex';

@Component({
  selector: 'app-area-spaline',
  templateUrl: './area-spaline.component.html',
  styleUrls: ['./area-spaline.component.scss'],
})
export class AreaSpalineComponent {
  public areaSpalineChart = chartData.areaSpalineChart;
}
