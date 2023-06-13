import { Component } from '@angular/core';
import { ProductBoxFilterService } from '../../../shared/services/product/product-box-filter.servie';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  listView: boolean = false;
  openSidebar: boolean = false;
  OpenFilter: Boolean = false;

  constructor(private ProductBoxFilterService: ProductBoxFilterService) {}

  gridOpens() {
    this.listView = false;
    this.ProductBoxFilterService.gridOpen();
  }
  listOpens() {
    this.listView = true;
    this.ProductBoxFilterService.listOpen();
  }
  grid2s() {
    this.listView = false;
    this.ProductBoxFilterService.grid2();
  }
  grid3s() {
    this.listView = false;
    this.ProductBoxFilterService.grid3();
  }
  grid6s() {
    this.listView = false;
    this.ProductBoxFilterService.grid6();
  }

  ngOnInit(): void {}
  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
