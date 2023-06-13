import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/dashboard/default/default';

@Component({
  selector: 'app-total-growth',
  templateUrl: './total-growth.component.html',
  styleUrls: ['./total-growth.component.scss'],
})
export class TotalGrowthComponent {
  public growthchart = chartData.growthchart;
}
