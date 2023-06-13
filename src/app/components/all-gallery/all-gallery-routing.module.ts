import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridDeskComponent } from './gallery-grid-desk/gallery-grid-desk.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component';
import { MasonaryGalleryComponent } from './masonary-gallery/masonary-gallery.component';
import { MasonaryWithDeskComponent } from './masonary-with-desk/masonary-with-desk.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'gallery-grid',
        component: GalleryGridComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'gallery-grid-desc',
        component: GalleryGridDeskComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'masonry-gallery',
        component: MasonaryGalleryComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'masonry-with-desc',
        component: MasonaryWithDeskComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'hover-effects',
        component: HoverEffectsComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllGalleryRoutingModule {}
