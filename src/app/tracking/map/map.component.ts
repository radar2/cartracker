import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'
import { MarkerService } from '../marker.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map:L.Map | null = null;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; Car tracker'
    });

    tiles.addTo(this.map);
  }
  constructor(private markerService:MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    if (this.map) {
      //this.markerService.makeCapitalMarkers(this.map);
      this.markerService.makeCapitalCircleMarkers(this.map);
    }
  }

}
