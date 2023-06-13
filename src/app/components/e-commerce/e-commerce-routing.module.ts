import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { WishlistComponent } from './wishlist/wishlist.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product',
        component: ProductComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'product-page',
        component: ProductPageComponent,
        data: { animation: [routingAnimation] },
      },

      {
        path: 'add-product',
        component: AddProductComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'payment-details',
        component: PaymentDetailComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'cart',
        component: CartComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
