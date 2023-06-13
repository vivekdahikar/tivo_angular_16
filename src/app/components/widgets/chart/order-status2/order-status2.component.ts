import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/widget/chart';

@Component({
  selector: 'app-order-status2',
  templateUrl: './order-status2.component.html',
  styleUrls: ['./order-status2.component.scss'],
})
export class OrderStatus2Component {
  orderStatus2 = chartData.orderStatus2;
}
