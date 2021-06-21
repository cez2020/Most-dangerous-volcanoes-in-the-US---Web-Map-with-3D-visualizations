# CREATE A LEAFLET MAP AND VISUALIZE 3D OBJECTS IN POPUP WINDOWS

This web map takes geographic data in GeoJSON format and displays the data in the form points on a map. Each point represents a volcano in the US.
When clicked, a point generates a popup window with additional information about the volcano as well as a 3D visualization of the feature.

## Requires

* GEOJSON files - can be downloaded from external sources or converted from shapefiles using a free software like QGIS
* For this webmap, GEOJSON files are included within the script.JS file
* A Mapbox API - it's FREE
* Leaflet library 1.7.1 (called in script file)
* Interactive 3D display for the web: https://modelviewer.dev/

## Final Result
General view - satellite
![screenshot1](/screenshots/wm1.jpg)

Kilauea Volcano - popup window with 3D visualization
![screenshot2](/screenshots/wm2.jpg)

Mount St. Helens - popup window with 3D visualization
![screenshot3](/screenshots/wm3.jpg)

Akutan Volcano - popup window with 3D visualization
![screenshot4](/screenshots/wm4.jpg)

## Video Demo (link)
https://youtu.be/s2kjjGmXZ8o
