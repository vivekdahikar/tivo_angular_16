import { NgModule } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";

import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CustomizerComponent } from "./components/costomizer/customizer.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { AppListComponent } from "./components/header/app-list/app-list.component";
import { SearchComponent } from "./components/header/search/search.component";
import { NotificationComponent } from "./components/header/notification/notification.component";
import { MessageComponent } from "./components/header/message/message.component";
import { MaximiseComponent } from "./components/header/maximise/maximise.component";
import { LanguageComponent } from "./components/header/language/language.component";
import { AccountComponent } from "./components/header/account/account.component";
import { DashboardComponent } from "./components/header/dashboard/dashboard.component";
import { ApplicationComponent } from "./components/header/application/application.component";
import { MorePagesComponent } from "./components/header/more-pages/more-pages.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavService } from "./services/nav/nav.service";
import { LayoutService } from "./services/layout/layout.service";
import { LoaderComponent } from "./components/loader/loader.component";
import { TapToTopComponent } from "./components/tap-to-top/tap-to-top.component";
import { ColorComponent } from "./components/costomizer/color/color.component";
import { LayoutSettingComponent } from "./components/costomizer/layout-setting/layout-setting.component";

@NgModule({
  declarations: [
    ContentComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    CustomizerComponent,
    FeatherIconsComponent,
    AppListComponent,
    SearchComponent,
    FeatherIconsComponent,
    NotificationComponent,
    MessageComponent,
    MaximiseComponent,
    LanguageComponent,
    AccountComponent,
    DashboardComponent,
    ApplicationComponent,
    MorePagesComponent,
    LoaderComponent,
    TapToTopComponent,
    ColorComponent,
    LayoutSettingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forRoot(),

    NgbModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [
    ContentComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    CustomizerComponent,
    FeatherIconsComponent,
    AppListComponent,
    SearchComponent,
    FeatherIconsComponent,
    NotificationComponent,
    MessageComponent,
    MaximiseComponent,
    LanguageComponent,
    AccountComponent,
    DashboardComponent,
    ApplicationComponent,
    MorePagesComponent,
    LoaderComponent,
    TapToTopComponent,
  ],
  providers: [DecimalPipe, NavService, LayoutService],
})
export class SharedModule {}
