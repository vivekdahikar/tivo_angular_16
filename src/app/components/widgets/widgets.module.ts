import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
import { EarningComponent } from './general/earning/earning.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SaleDetailComponent } from './general/sale-detail/sale-detail.component';
import { OrderDetailComponent } from './general/order-detail/order-detail.component';
import { WeatherComponent } from './general/weather/weather.component';
import { DatePickerComponent } from './general/date-picker/date-picker.component';
import { FeedbackComponent } from './general/feedback/feedback.component';
import { ManagerComponent } from './general/manager/manager.component';
import { RecentActivityComponent } from './general/recent-activity/recent-activity.component';
import { RecentKelvinComponent } from './general/recent-kelvin/recent-kelvin.component';
import { BrowserComponent } from './general/browser/browser.component';
import { SocialComponent } from './general/social/social.component';
import { ProductCartComponent } from './general/product-cart/product-cart.component';
import { EmployeeStatusComponent } from './general/employee-status/employee-status.component';
import { CardComponent } from './general/card/card.component';
import { ContactUsComponent } from './general/contact-us/contact-us.component';
import { SaleComponent } from './chart/sale/sale.component';
import { ExpenseComponent } from './chart/expense/expense.component';
import { TotalEarningComponent } from './chart/total-earning/total-earning.component';
import { SkillStatusComponent } from './chart/skill-status/skill-status.component';
import { OrderStatusComponent } from './chart/order-status/order-status.component';
import { LiveProductComponent } from './chart/live-product/live-product.component';
import { LiveTurnoverComponent } from './chart/live-turnover/live-turnover.component';
import { MonthlySaleComponent } from './chart/monthly-sale/monthly-sale.component';
import { UsesComponent } from './chart/uses/uses.component';
import { BrowserUsesComponent } from './chart/browser-uses/browser-uses.component';
import { FinanceComponent } from './chart/finance/finance.component';
import { OrderStatus2Component } from './chart/order-status2/order-status2.component';

@NgModule({
  declarations: [GeneralComponent, ChartComponent, EarningComponent, SaleDetailComponent, OrderDetailComponent, WeatherComponent, DatePickerComponent, FeedbackComponent, ManagerComponent, RecentActivityComponent, RecentKelvinComponent, BrowserComponent, SocialComponent, ProductCartComponent, EmployeeStatusComponent, CardComponent, ContactUsComponent, SaleComponent, ExpenseComponent, TotalEarningComponent, SkillStatusComponent, OrderStatusComponent, LiveProductComponent, LiveTurnoverComponent, MonthlySaleComponent, UsesComponent, BrowserUsesComponent, FinanceComponent, OrderStatus2Component],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NgApexchartsModule,
    SharedModule,
    NgbModule,
    FormsModule,
  ],
})
export class WidgetsModule {}
