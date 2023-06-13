import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllGalleryRoutingModule } from './all-gallery-routing.module';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryGridDeskComponent } from './gallery-grid-desk/gallery-grid-desk.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component';
import { MasonaryGalleryComponent } from './masonary-gallery/masonary-gallery.component';
import { MasonaryWithDeskComponent } from './masonary-with-desk/masonary-with-desk.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    GalleryGridComponent,
    GalleryGridDeskComponent,
    HoverEffectsComponent,
    MasonaryGalleryComponent,
    MasonaryWithDeskComponent,
  ],
  imports: [
    CommonModule,
    AllGalleryRoutingModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
    NgxMasonryModule,
  ],
})
export class AllGalleryModule {}
