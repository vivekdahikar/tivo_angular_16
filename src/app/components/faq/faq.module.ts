import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FaqRoutingModule } from "./faq-routing.module";
import { FaqComponent } from "./faq.component";
import { FaqTopPartComponent } from "./faq-top-part/faq-top-part.component";
import { FeaturedTutorialsComponent } from "./featured-tutorials/featured-tutorials.component";
import { IntellectualPropertyComponent } from "./intellectual-property/intellectual-property.component";
import { LatestArticlesAndVideosComponent } from "./latest-articles-and-videos/latest-articles-and-videos.component";
import { LatestUpdatesComponent } from "./latest-updates/latest-updates.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { QuickQuesAndAnsComponent } from "./quick-ques-and-ans/quick-ques-and-ans.component";
import { SellingAndBuyingComponent } from "./selling-and-buying/selling-and-buying.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    FaqComponent,
    FaqTopPartComponent,
    FeaturedTutorialsComponent,
    IntellectualPropertyComponent,
    LatestArticlesAndVideosComponent,
    LatestUpdatesComponent,
    NavigationComponent,
    QuickQuesAndAnsComponent,
    SellingAndBuyingComponent,
    UserAccountComponent,
  ],
  imports: [CommonModule, FaqRoutingModule, SharedModule, NgbModule],
  exports: [FaqTopPartComponent, FeaturedTutorialsComponent],
})
export class FaqModule {}
