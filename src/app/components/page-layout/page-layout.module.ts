import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { HideNavComponent } from './hide-nav/hide-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FooterDarkComponent,
    FooterFixedComponent,
    FooterLightComponent,
    HideNavComponent,
  ],
  imports: [CommonModule, PageLayoutRoutingModule, SharedModule],
})
export class PageLayoutModule {}
