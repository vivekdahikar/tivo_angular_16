import { Component } from '@angular/core';
import * as productData from '../../../../shared/data/component/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  public orderList = productData.orderList;
}
