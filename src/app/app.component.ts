import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  x = '';

  constructor() {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.showPosition);
    } else {
      this.x = 'Geolocation is not supported by this browser.';
    }
  }

  showPosition(position) {
    this.x =
      'Latitude: ' +
      position.coords.latitude +
      '<br>Longitude: ' +
      position.coords.longitude;
  }
}
