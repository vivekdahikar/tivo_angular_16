import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent {
  public progress1 = chartData.progress1;
  public progress2 = chartData.progress2;
  public progress3 = chartData.progress3;
  public progress4 = chartData.progress4;
  public progress5 = chartData.progress5;
}
