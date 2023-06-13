import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { HideNavComponent } from './hide-nav/hide-nav.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'footer-dark',
        component: FooterDarkComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'footer-fixed',
        component: FooterFixedComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'footer-light',
        component: FooterLightComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'hide-nav-scroll',
        component: HideNavComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLayoutRoutingModule {}
