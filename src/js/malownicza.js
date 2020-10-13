import $ from 'jquery';
import { Viewer } from '../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.js';
import MarkersPlugin from '../../node_modules/photo-sphere-viewer/dist/plugins/markers.js';
import desktopPano from '../assets/panorama/malownicza-desktop.jpg';
import logoMarker from '../assets/panorama/logo-marker.svg';
import markerIcon from '../assets/panorama/map-marker-blue.png';
import shopMarker from '../assets/panorama/shop-marker.svg';
import busMarker from '../assets/panorama/bus-marker.svg';
import treeMarker from '../assets/panorama/tree-marker.svg';
import hospitalMarker from '../assets/panorama/hospital-marker.svg';
import schoolMarker from '../assets/panorama/school-marker.svg';
import sportMarker from '../assets/panorama/sport-marker.svg';
import museumMarker from '../assets/panorama/museum-marker.svg';
import parkingMarker from '../assets/panorama/parking-marker.svg';
import restaurantMarker from '../assets/panorama/restaurant-marker.svg';

$(document).ready(function() {
  const viewer = new Viewer({
    container: document.querySelector('#malownicza-pano'),
    panorama: desktopPano,
    navbar: ['autorotate', 'zoomOut', 'zoomRange', 'zoomIn', 'fullscreen'],
    defaultLong: 0.75,
    defaultLat: -0.11,
    plugins: [
      [
        MarkersPlugin,
        {
          markers: [
            {
              id: 'malownicza-enklawa-marker',
              longitude: 0.75,
              latitude: -0.32,
              image: logoMarker,
              width: 70,
              height: 100,
              anchor: 'bottom center',
              tooltip: 'Teren inwestycji Malownicza Enklawa'
            },
            {
              id: 'przystanek1-marker',
              longitude: 1.1,
              latitude: -0.06,
              image: busMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Przystanek autobusowy - 500m'
            },
            {
              id: 'przystanek2-marker',
              longitude: 3.19,
              latitude: -0.041,
              image: busMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Przystanek autobusowy - 450m'
            },
            {
              id: 'wewel-marker',
              longitude: 1.33,
              latitude: 0.01,
              image: museumMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Zamek Królewski na Wawelu - 6km'
            },
            {
              id: 'parking-marker',
              longitude: 5.718,
              latitude: -0.044,
              image: parkingMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Parking Park and Ride - 900m<br/>Kolejka do dworca centralnego, dojazd kolejki 5 min'
            },
            {
              id: 'las-wolski-marker',
              longitude: 2.67,
              latitude: 0.13,
              image: treeMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Las Wolski i Ogród Zoologiczny - 1700m'
            },
            {
              id: 'blonia-marker',
              longitude: 1.27,
              latitude: -0.003,
              image: treeMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Błonia - 3,7km'
            },
            {
              id: 'kopiec-kosciuszki-marker',
              longitude: 1.57,
              latitude: 0.044,
              image: treeMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Kopiec Kościuszki - 3,5km'
            },
            {
              id: 'park-decjusza-marker',
              longitude: 1.23,
              latitude: -0.017,
              image: treeMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Park Decjusza - 1,6km'
            },
            {
              id: 'kopiec-pilsudskiego-marker',
              longitude: 2.82,
              latitude: 0.13,
              image: treeMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Kopiec Józefa Piłsudskiego - 1200m'
            },
            {
              id: 'leviatan-marker',
              longitude: 5.71,
              latitude: -0.02,
              image: shopMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Sklep spożywczy - 1400m'
            },
            {
              id: 'wloszczyzna-marker',
              longitude: 1.2,
              latitude: -0.016,
              image: restaurantMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Restauracja Włoszczyzna - 1750m'
            },
            {
              id: 'bacowka-marker',
              longitude: 1.18,
              latitude: -0.014,
              image: shopMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Sklep spożywczy Bacówka Towary Tradycyjne - 1800m'
            },
            {
              id: 'portobello-marker',
              longitude: 1.17,
              latitude: -0.015,
              image: restaurantMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Restauracja Portobello - 1800m'
            },
            {
              id: 'gospoda-marker',
              longitude: 1.13,
              latitude: -0.016,
              image: restaurantMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Gospoda na Woli - 1650m'
            },
            {
              id: '27-porcji-marker',
              longitude: 1.299,
              latitude: -0.0126,
              image: restaurantMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Restauracja "27 Porcji" - 1550m'
            },
            {
              id: 'biedronka-marker',
              longitude: 0.15,
              latitude: -0.026,
              image: shopMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Sklep spożywczy - 1500m'
            },
            {
              id: 'jubilat-marker',
              longitude: 3.15,
              latitude: -0.056,
              image: shopMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Sklep spożywczo - przemysłowy - 450m'
            },
            {
              id: 'szkola-podstawowa-marker',
              longitude: 4.46,
              latitude: -0.003,
              image: schoolMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Publiczna Szkoła Podstawowa - 1200m'
            },
            {
              id: 'przedszkole-abc-marker',
              longitude: 2.34,
              latitude: -0.026,
              image: schoolMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Przedszkole ABC - 500m'
            },
            {
              id: 'przedszkole-waldorfowskie-marker',
              longitude: 1.023,
              latitude: -0.063,
              image: schoolMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Przedszkole Waldorfowskie - 400m'
            },
            {
              id: 'orlik-marker',
              longitude: 4.54,
              latitude: -0.003,
              image: sportMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Orlik - 1200m'
            },
            {
              id: 'park-wola-marker',
              longitude: 1.257,
              latitude: -0.019,
              image: sportMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Park Rozrywki Wola - 1500m'
            },
            {
              id: 'uniwersytet-marker',
              longitude: 3.97,
              latitude: -0.012,
              image: schoolMarker,
              width: 35,
              height: 50,
              anchor: 'bottom center',
              tooltip: 'Uniwersytet Rolniczy - 650m'
            }
          ]
        }
      ]
    ]
  });

  viewer.on('click', function(e, data) {
    console.log(data.longitude, data.latitude);
  });

  var markersPlugin = viewer.getPlugin(MarkersPlugin);

  markersPlugin.on('select-marker', function(e, marker, data) {
    markersPlugin.hideAllTooltips();
    marker.showTooltip(e);
  });
});
