import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  openSidebar: boolean = false;
  value2: number = 100;
  maxvalue: number = 70;

  constructor() {}

  options: Options = {
    floor: 0,
    ceil: 200,
    getSelectionBarColor: (value: number): string => {
      return '#6362e7';
    },
    getPointerColor: (value: number): string => {
      return '#6362e7';
    },
  };

  ngOnInit(): void {}

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
  customOptions = {
    loop: true,
    nav: true,
    dot: false,
    responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  products: any = [
    {
      name: 'White T-Shirt',

      price: '$100',
      image: 'assets/images/ecommerce/01.jpg',
    },
    {
      name: ' Jeans Jacket',
      price: '$1185.99',

      image: 'assets/images/ecommerce/02.jpg',
    },
    {
      name: 'Gray one piece',
      price: '$325.25',

      image: 'assets/images/ecommerce/03.jpg',
    },
  ];
}
