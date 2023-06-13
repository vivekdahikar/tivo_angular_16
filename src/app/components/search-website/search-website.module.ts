import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchWebsiteRoutingModule } from './search-website-routing.module';
import { SearchWebsiteComponent } from './search-website.component';
import { AllComponent } from './all/all.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';


@NgModule({
  declarations: [
    SearchWebsiteComponent,
    AllComponent,
    ImagesComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    SearchWebsiteRoutingModule,
    NgbModule,
    SharedModule,
    LightboxModule,
    GalleryModule,
  ]
})
export class SearchWebsiteModule { }
