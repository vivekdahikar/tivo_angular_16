import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-live-turnover',
  templateUrl: './live-turnover.component.html',
  styleUrls: ['./live-turnover.component.scss'],
})
export class LiveTurnoverComponent {
  public turnover = chartData.TurnoverChart;
}
