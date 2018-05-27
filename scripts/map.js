"use strict";

function initMap() {
  // This is the Google Maps options
  let options = {
    zoom: 16,
    center: {
      lat: 52.629399,
      lng: -1.137801
    }
  }
  // Creates a New Map
  let map = new google.maps.Map(document.getElementById('map'), options);
  // Adds a marker to the map to show where your location is
  let marker = new google.maps.Marker({
    position: {
      lat: 52.629399,
      lng: -1.137801
    },
    map: map,
    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
  //information pop up when cursor is clicked on
  let infoWindow = new google.maps.InfoWindow({
    content: '<h3>Docker HQ</h3><p>Gateway House</p><p>De Montfort University</p><p>The Gateway</p><p>Leicester</p><p>LE1 9BH</p>'
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
