//// var newYorkCoords = [40.73, -74.0059];
//// var mapZoomLevel = 12;
// function createMap() {
var myMap = L.map("map", {
  center: [40.73, -74.0059],
  zoom: 13,
});

// Create the createMap function


  // Create the tile layer that will be the background of our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

  var APILink = "http://data.beta.nyc//dataset/d6ffa9a4-c598-4b18-8caf-14abde6a5755/resource/74cdcc33-512f-439c-" +
"a43e-c09588c4b391/download/60dbe69bcd3640d5bedde86d69ba7666geojsonmedianhouseholdincomecensustract.geojson";

var geojson;

  // Create a baseMaps object to hold the lightmap layer
var baseMaps = {
  "Street Map": streetmap,
};

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "Bike Stations": bikeStations
  };

  // Create the map object with options
  var newYorkCoords = L.map("map", {
    center: [40.73, -74.0059],
    zoom: 13,
    layers: [lightmap, bikeStations]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(newYorkCoords);


// Create the createMarkers function
function createMarkers(response) {
   // Pull the "stations" property off of response.data
   var queryUrl = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"
   d3.json(queryUrl, function(data){
     createMarkers(response.data.statations);
   });





  
   // Initialize an array to hold bike markers

   // Loop through the stations array
   for (var i = 0; i < locations.length; i++)
     // For each station, create a marker and bind a popup with the station's name
    
     // Add the marker to the bikeMarkers array

   // Create a layer group made from the bike markers array, pass it into the createMap function
 var states = L.layerGroup(stateMarkers);
var cities = L.layerGroup(cityMarkers);

// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
