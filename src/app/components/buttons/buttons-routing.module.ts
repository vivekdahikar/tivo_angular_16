import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default-style',
        component: DefaultStyleComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'button-group',
        component: ButtonGroupComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsRoutingModule {}
