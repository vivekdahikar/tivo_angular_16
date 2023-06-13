import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/charts/apex';

@Component({
  selector: 'app-basic-area',
  templateUrl: './basic-area.component.html',
  styleUrls: ['./basic-area.component.scss'],
})
export class BasicAreaComponent {
  public turnover = chartData.splineArea1;
}
