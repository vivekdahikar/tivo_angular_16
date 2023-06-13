import { Component } from '@angular/core';
import * as generalData from '../../../shared/data/component/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent {
  public profit = generalData.profit;
  public visitor = generalData.visitor;
  public sold = generalData.sold;
}
