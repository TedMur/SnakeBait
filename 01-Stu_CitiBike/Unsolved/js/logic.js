// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;
var newYorkCoords = L.map("map", {
  center: [40.73, -74.0059],
  zoom: 13
});

// Create the createMap function


  // Create the tile layer that will be the background of our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(newYorkCoords);

  // Create a baseMaps object to hold the lightmap layer
var baseMaps = {
  "Lightmap": lightmap,
  "Dark Map": darkmap
};

  // Create an overlayMaps object to hold the bikeStations layer
var overlayMaps = {
  "Bike Stations": 
};

  // Create the map object with options
var 

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(newYorkCoords);

// Create the createMarkers function

  // Pull the "stations" property off of response.data

  // Initialize an array to hold bike markers

  // Loop through the stations array
    // For each station, create a marker and bind a popup with the station's name

    // Add the marker to the bikeMarkers array

  // Create a layer group made from the bike markers array, pass it into the createMap function


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
