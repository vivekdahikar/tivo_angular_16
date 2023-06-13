import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/component/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-order-statics',
  templateUrl: './order-statics.component.html',
  styleUrls: ['./order-statics.component.scss'],
})
export class OrderStaticsComponent {
  public orderStatics = chartData.orderStatics;
}
