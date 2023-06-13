import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingBgImageComponent } from './coming-bg-image/coming-bg-image.component';
import { ComingSimpleComponent } from './coming-simple/coming-simple.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ComingBgImageComponent, ComingSimpleComponent],
  imports: [CommonModule, ComingSoonRoutingModule, SharedModule],
})
export class ComingSoonModule {}
