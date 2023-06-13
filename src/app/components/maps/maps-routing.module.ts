import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapJsComponent } from './map-js/map-js.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'map-js',
        component: MapJsComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'leaflet-map',
        component: LeafletMapComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
