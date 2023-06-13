import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItem = [
    {
      productImg: 'assets/images/product/1.png',
      productName: 'Party Wear Gown',
      price: 21,
      total: 105,
    },
    {
      productImg: 'assets/images/product/13.png',
      productName: 'Fancy Watch',
      price: 50,
      total: 250,
    },
    {
      productImg: 'assets/images/product/4.png',
      productName: 'Man Shoes',
      price: 12,
      total: 60,
    },
  ];
}
