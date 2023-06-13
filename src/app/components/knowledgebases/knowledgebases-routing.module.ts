import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeCategoryComponent } from './knowledge-category/knowledge-category.component';
import { KnowledgeDetailsComponent } from './knowledge-details/knowledge-details.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'knowledgebase',
        component: KnowledgebaseComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'knowledge-category',
        component: KnowledgeCategoryComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'knowledge-detail',
        component: KnowledgeDetailsComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowledgebasesRoutingModule {}
