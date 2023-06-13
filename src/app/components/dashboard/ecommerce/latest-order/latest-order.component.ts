import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-order',
  templateUrl: './latest-order.component.html',
  styleUrls: ['./latest-order.component.scss'],
})
export class LatestOrderComponent {
  customOptions = {
    loop: true,
    nav: false,
    dot: false,
    responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  products: any = [
    {
      name: 'Black Apple Airpod',
      image: 'assets/images/dashboard-2/1.png',
    },
    {
      name: 'Red Hova Sport Shoes',

      image: 'assets/images/dashboard-2/2.png',
    },
    {
      name: 'Blue Mens Watch',

      image: 'assets/images/dashboard-2/3.png',
    },
  ];
}
