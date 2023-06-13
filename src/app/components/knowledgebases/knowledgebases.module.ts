import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { KnowledgebasesRoutingModule } from "./knowledgebases-routing.module";
import { KnowledgebaseComponent } from "./knowledgebase/knowledgebase.component";
import { KnowledgeDetailsComponent } from "./knowledge-details/knowledge-details.component";
import { KnowledgeCategoryComponent } from "./knowledge-category/knowledge-category.component";
import { HelpBoardComponent } from "./help-board/help-board.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { SharedModule } from "src/app/shared/shared.module";
import { FaqModule } from "../faq/faq.module";
import { LearningModule } from "../learning/learning.module";

@NgModule({
  declarations: [
    KnowledgebaseComponent,
    KnowledgeDetailsComponent,
    KnowledgeCategoryComponent,
    HelpBoardComponent,
  ],
  imports: [
    CommonModule,
    KnowledgebasesRoutingModule,
    AngularSvgIconModule.forRoot(),
    SharedModule,
    FaqModule,
    LearningModule,
  ],
})
export class KnowledgebasesModule {}
