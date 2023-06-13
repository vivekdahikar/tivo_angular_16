import { Component } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product1.service';
import { Products } from 'src/app/shared/model/product.model';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  listData: Products[] = [];

  constructor(
    public ProductService: ProductService,
    public config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  // whishlist data
  ngOnInit(): void {
    this.ProductService.products().subscribe((data: any) => {
      this.listData = data;
    });
  }
}
