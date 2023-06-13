import { NgModule } from "@angular/core";
import {
  AsyncPipe,
  CommonModule,
  DecimalPipe,
  NgFor,
  NgIf,
} from "@angular/common";

import { ECommerceRoutingModule } from "./e-commerce-routing.module";
import { ProductComponent } from "./product/product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { PaymentDetailComponent } from "./payment-detail/payment-detail.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { BrandComponent } from "./product-page/brand/brand.component";
import { DescriptionTabComponent } from "./product-page/description-tab/description-tab.component";
import { DetailsComponent } from "./product-page/details/details.component";
import { FilterComponent } from "./product/filter/filter.component";
import { ProductBoxComponent } from "./product/product-box/product-box.component";
import { QuickViewComponent } from "./product/quick-view/quick-view.component";
import { CodComponent } from "./payment-detail/cod/cod.component";
import { CreditCardComponent } from "./payment-detail/credit-card/credit-card.component";
import { DebitCardComponent } from "./payment-detail/debit-card/debit-card.component";
import { EmiComponent } from "./payment-detail/emi/emi.component";
import { NetBankingComponent } from "./payment-detail/net-banking/net-banking.component";
import { InvoiceDataTableComponent } from "./invoice/invoice-data-table/invoice-data-table.component";
import { BillingDetailsComponent } from "./checkout/billing-details/billing-details.component";
import { PlaceOrderComponent } from "./checkout/place-order/place-order.component";
import { SizeImageComponent } from "./add-product/size-image/size-image.component";
import { DescriptionCategoryComponent } from "./add-product/description-category/description-category.component";
import { NgxDropzoneModule } from "ngx-dropzone";
import { SharedModule } from "src/app/shared/shared.module";
import {
  NgbActiveModal,
  NgbModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
} from "@ng-bootstrap/ng-bootstrap";
import "mousetrap";
import "hammerjs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPrintModule } from "ngx-print";
import { NgxSliderModule } from 'ngx-slider-v2';
import { GalleryModule } from "@ks89/angular-modal-gallery";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "src/app/shared/services/product/product1.service";
import { ProductListService } from "src/app/shared/services/product/product.service";
import { ProductListDirective } from "src/app/shared/directive/product-list.directive";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,

    CartComponent,
    CheckoutComponent,
    InvoiceComponent,
    OrderHistoryComponent,
    PaymentDetailComponent,
    PricingComponent,
    ProductListComponent,
    ProductPageComponent,
    WishlistComponent,
    BrandComponent,
    DescriptionTabComponent,
    DetailsComponent,
    FilterComponent,
    ProductBoxComponent,
    QuickViewComponent,
    CodComponent,
    CreditCardComponent,
    ProductListDirective,
    DebitCardComponent,
    EmiComponent,
    NetBankingComponent,
    InvoiceDataTableComponent,
    BillingDetailsComponent,
    PlaceOrderComponent,
    SizeImageComponent,
    DescriptionCategoryComponent,
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    NgxDropzoneModule,
    SharedModule,
    NgbModule,
    NgbTypeaheadModule,
    NgFor,
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    HttpClientModule,
    CarouselModule,
    NgbPaginationModule,
    NgIf,
    NgxPrintModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    GalleryModule,
  ],
  exports: [ProductBoxComponent, ProductPageComponent],
  providers: [NgbActiveModal, ProductService, ProductListService],
})
export class ECommerceModule {}
