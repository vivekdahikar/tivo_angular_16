import { Component } from '@angular/core';
import * as productData from '../../../../shared/data/component/dashboard/ecommerce/ecommerce';

@Component({
  selector: 'app-selling-product',
  templateUrl: './selling-product.component.html',
  styleUrls: ['./selling-product.component.scss'],
})
export class SellingProductComponent {
  public SellingProduct = productData.SellingProduct;
}
