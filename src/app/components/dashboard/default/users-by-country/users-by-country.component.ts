import { Component } from "@angular/core";
import * as L from "leaflet";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-users-by-country",
  templateUrl: "./users-by-country.component.html",
  styleUrls: ["./users-by-country.component.scss"],
})
export class UsersByCountryComponent {
  constructor(private http: HttpClient) {}
  options1 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909),
  };
  layersControl = {
    baseLayers: {
      "Open Street Map": L.tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { maxZoom: 18, attribution: "..." }
      ),
      "Open Cycle Map": L.tileLayer(
        "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
        { maxZoom: 18, attribution: "..." }
      ),
    },
    overlays: {
      "Big Circle": L.circle([46.95, -122], { radius: 5000 }),
      "Big Square": L.polygon([
        [46.8, -121.55],
        [46.9, -121.55],
        [46.9, -121.7],
        [46.8, -121.7],
      ]),
    },
  };
}
