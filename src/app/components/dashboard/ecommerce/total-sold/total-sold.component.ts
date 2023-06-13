import { Component } from '@angular/core';
import * as productData from '../../../../shared/data/component/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-total-sold',
  templateUrl: './total-sold.component.html',
  styleUrls: ['./total-sold.component.scss'],
})
export class TotalSoldComponent {
  public Totalsold = productData.Totalsold;
}
