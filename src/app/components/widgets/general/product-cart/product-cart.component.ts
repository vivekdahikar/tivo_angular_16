import { Component } from '@angular/core';
import * as generalData from '../../../../shared/data/component/widget/general';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  public productCart = generalData.productCart;
}
