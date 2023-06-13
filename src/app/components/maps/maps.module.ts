import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';

import { MapJsComponent } from './map-js/map-js.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapJsComponent, LeafletMapComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    GoogleMapsModule,
    HttpClientModule,
    LeafletModule,
  ],
})
export class MapsModule {}
