import { Component } from '@angular/core';
import * as data from '../../../shared/data/component/e-commerce/order-history';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent {
  public orderHistory = data.orderHistory;
  constructor() {}

  ngOnInit(): void {}
}
