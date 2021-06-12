// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 11,
    accessToken: API_KEY
});


// streets.addTo(map);
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 11,
    accessToken: API_KEY
});
let baseMaps = {
    street: streetst,
    satelite: satelliteStreets
  };
  let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [light]
});
L.control.layers(baseMaps).addTo(map);
let torontoData = "https://raw.githubusercontent.com/Manupriya1/UCB-Leaflet_Earthquake-Data--Project/Mapping_GeoJSON_Linestrings/torontoRoutes.json";




// Then we add our 'graymap' tile layer to the map.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
});
    
  // Creating a GeoJSON layer with the retrieved data.
  
  


//mapbox/streets-v11
//mapbox/outdoors-v11
//mapbox/light-v10
//mapbox/dark-v10
//mapbox/satellite-v9
//mapbox/satellite-streets-v11
