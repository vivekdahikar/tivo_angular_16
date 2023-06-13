import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DefaultComponent } from "./default/default.component";
import { EcommerceComponent } from "./ecommerce/ecommerce.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { WelcomeComponent } from "./default/welcome/welcome.component";
import { TotalRevenueComponent } from "./default/total-revenue/total-revenue.component";
import { TotalInvestmentComponent } from "./default/total-investment/total-investment.component";
import { OurTotalUsersComponent } from "./default/our-total-users/our-total-users.component";
import { TotalAppointmentComponent } from "./default/total-appointment/total-appointment.component";
import { TotalEarningComponent } from "./default/total-earning/total-earning.component";
import { UsersByCountryComponent } from "./default/users-by-country/users-by-country.component";
import { TotalGrowthComponent } from "./default/total-growth/total-growth.component";
import { RecentActivityComponent } from "./default/recent-activity/recent-activity.component";
import { ChatWithUserComponent } from "./default/chat-with-user/chat-with-user.component";
import { ToDoComponent } from "./default/to-do/to-do.component";
import { ChartistModule } from "ng-chartist";
import { NgApexchartsModule } from "ng-apexcharts";
import { TotalProfitComponent } from "./ecommerce/total-profit/total-profit.component";
import { TotalSoldComponent } from "./ecommerce/total-sold/total-sold.component";
import { SellingProductComponent } from "./ecommerce/selling-product/selling-product.component";
import { GoalOverviewComponent } from "./ecommerce/goal-overview/goal-overview.component";
import { OrderStaticsComponent } from "./ecommerce/order-statics/order-statics.component";
import { LatestOrderComponent } from "./ecommerce/latest-order/latest-order.component";
import { OrderListComponent } from "./ecommerce/order-list/order-list.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    DefaultComponent,
    EcommerceComponent,
    WelcomeComponent,
    TotalRevenueComponent,
    TotalInvestmentComponent,
    OurTotalUsersComponent,
    TotalAppointmentComponent,
    TotalEarningComponent,
    UsersByCountryComponent,
    TotalGrowthComponent,
    RecentActivityComponent,
    ChatWithUserComponent,
    ToDoComponent,
    TotalProfitComponent,
    TotalSoldComponent,
    SellingProductComponent,
    GoalOverviewComponent,
    OrderStaticsComponent,
    LatestOrderComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgbModule,
    ChartistModule,
    CarouselModule,
    NgApexchartsModule,
    HttpClientModule,
    LeafletModule,
  ],
})
export class DashboardModule {}
