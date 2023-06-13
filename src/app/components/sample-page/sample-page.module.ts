import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';

@NgModule({
  declarations: [SamplePageComponent],
  imports: [CommonModule, SamplePageRoutingModule, SharedModule],
})
export class SamplePageModule {}
