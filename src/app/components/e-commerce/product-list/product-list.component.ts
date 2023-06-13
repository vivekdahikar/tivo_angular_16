import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';

import { productList } from '../../../shared/data/interface/product';
import {
  ProductListDirective,
  SortEvent,
} from '../../../shared/directive/product-list.directive';
import * as data from '../../../shared/data/component/e-commerce/product-list';

import { ProductListService } from '../../../shared/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductListService, DecimalPipe],
})
export class ProductListComponent {
  products$: Observable<productList[]>;
  total$: Observable<number>;

  public PRODUCTLIST = data.PRODUCTLIST;

  @ViewChildren(ProductListDirective)
  headers!: QueryList<ProductListDirective>;

  constructor(public service: ProductListService) {
    this.products$ = service.support$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
