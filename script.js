// set API key
const apiKey = 'insert your api key here'

// set map
const mymap = L.map('mapid').setView([49.53, -122.00], 3);

// volcano locations file with related attribute data
const volcanoPoints = {
    "type": "FeatureCollection",
    "name": "volcanoes_usa",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "VOLCANX020": 414.0, "NAME": "Makushin", "ELEV": 1800.0, "TYPE": "Stratovolcano", "glb_dir": "models/makushin.glb", "STATE": "Alaska", "IMG": "img/makushin.jpg", "LINK": "https://volcano.si.edu/volcano.cfm?vn=311310" }, "geometry": { "type": "Point", "coordinates": [-166.92191, 53.89015] } },
        { "type": "Feature", "properties": { "VOLCANX020": 417.0, "NAME": "Akutan", "ELEV": 1303.0, "TYPE": "Stratovolcano", "glb_dir": "models/akutan.glb", "STATE": "Alaska", "IMG": "img/akutan.jpg", "LINK": "https://www.volcanodiscovery.com/akutan.html" }, "geometry": { "type": "Point", "coordinates": [-165.98197, 54.13313] } },
        { "type": "Feature", "properties": { "VOLCANX020": 418.0, "NAME": "Mount Spurr", "ELEV": 3374.0, "TYPE": "Stratovolcano", "glb_dir": "models/spurr.glb", "STATE": "Alaska", "IMG": "img/spurr.jpg", "LINK": "https://volcano.si.edu/volcano.cfm?vn=313040" }, "geometry": { "type": "Point", "coordinates": [-152.25216, 61.29841] } },
        { "type": "Feature", "properties": { "VOLCANX020": 424.0, "NAME": "Redoubt", "ELEV": 3108.0, "TYPE": "Stratovolcano", "glb_dir": "models/redoubt.glb", "STATE": "Alaska", "IMG": "img/redoubt.jpg", "LINK": "https://volcano.si.edu/volcano.cfm?vn=313030" }, "geometry": { "type": "Point", "coordinates": [-152.7423, 60.48441] } },
        { "type": "Feature", "properties": { "VOLCANX020": 433.0, "NAME": "Augustine", "ELEV": 1252.0, "TYPE": "Lava Domes", "glb_dir": "models/augustine.glb", "STATE": "Alaska", "IMG": "img/augustine.jpg", "LINK": "https://avo.alaska.edu/volcanoes/volcinfo.php?volcname=augustine" }, "geometry": { "type": "Point", "coordinates": [-153.43214, 59.36235] } },
        { "type": "Feature", "properties": { "VOLCANX020": 509.0, "NAME": "Mount Baker", "ELEV": 3285.0, "TYPE": "Stratovolcano", "glb_dir": "models/baker.glb", "STATE": "Washington", "IMG": "img/baker.jpg", "LINK": "https://www.usgs.gov/volcanoes/mount-baker/" }, "geometry": { "type": "Point", "coordinates": [-121.81127, 48.77685] } },
        { "type": "Feature", "properties": { "VOLCANX020": 511.0, "NAME": "Glacier Peak", "ELEV": 3213.0, "TYPE": "Stratovolcano", "glb_dir": "models/glacier.glb", "STATE": "Washington", "IMG": "img/glacier.jpg", "LINK": "https://www.usgs.gov/volcanoes/glacier-peak/" }, "geometry": { "type": "Point", "coordinates": [-121.11123, 48.11185] } },
        { "type": "Feature", "properties": { "VOLCANX020": 513.0, "NAME": "Mount Rainier", "ELEV": 4392.0, "TYPE": "Stratovolcano", "glb_dir": "models/rainier.glb", "STATE": "Washington", "IMG": "img/rainier.jpg", "LINK": "https://www.usgs.gov/volcanoes/mount-rainier" }, "geometry": { "type": "Point", "coordinates": [-121.75122, 46.86983] } },
        { "type": "Feature", "properties": { "VOLCANX020": 515.0, "NAME": "Mount St. Helens", "ELEV": 2549.0, "TYPE": "Stratovolcano", "glb_dir": "models/helens.glb", "STATE": "Washington", "IMG": "img/helens.jpg", "LINK": "https://www.usgs.gov/volcanoes/mount-st-helens" }, "geometry": { "type": "Point", "coordinates": [-122.18122, 46.19984] } },
        { "type": "Feature", "properties": { "VOLCANX020": 519.0, "NAME": "Mount Hood", "ELEV": 3426.0, "TYPE": "Stratovolcano", "glb_dir": "models/hood.glb", "STATE": "Oregon", "IMG": "img/hood.jpg", "LINK": "https://www.usgs.gov/volcanoes/mount-hood" }, "geometry": { "type": "Point", "coordinates": [-121.69121, 45.37385] } },
        { "type": "Feature", "properties": { "VOLCANX020": 527.0, "NAME": "Three Sisters", "ELEV": 3157.0, "TYPE": "Complex Volcano", "glb_dir": "models/sisters.glb", "STATE": "Oregon", "IMG": "img/sisters.jpg", "LINK": "https://www.usgs.gov/volcanoes/three-sisters" }, "geometry": { "type": "Point", "coordinates": [-121.77116, 44.09984] } },
        { "type": "Feature", "properties": { "VOLCANX020": 531.0, "NAME": "Newberry", "ELEV": 2434.0, "TYPE": "Shield Volcano", "glb_dir": "models/newberry.glb", "STATE": "Oregon", "IMG": "img/newberry.jpg", "LINK": "https://www.usgs.gov/volcanoes/newberry" }, "geometry": { "type": "Point", "coordinates": [-121.22114, 43.72185] } },
        { "type": "Feature", "properties": { "VOLCANX020": 538.0, "NAME": "Crater Lake", "ELEV": 2487.0, "TYPE": "Caldera", "glb_dir": "models/crater.glb", "STATE": "Oregon", "IMG": "img/crater.jpg", "LINK": "https://www.usgs.gov/volcanoes/crater-lake" }, "geometry": { "type": "Point", "coordinates": [-122.12115, 42.92986] } },
        { "type": "Feature", "properties": { "VOLCANX020": 539.0, "NAME": "Yellowstone", "ELEV": 2805.0, "TYPE": "Caldera", "glb_dir": "models/yellowstone.glb", "STATE": "Wyoming", "IMG": "img/yellowstone.jpg", "LINK": "https://www.usgs.gov/observatories/yellowstone-volcano-observatory" }, "geometry": { "type": "Point", "coordinates": [-110.67077, 44.42995] } },
        { "type": "Feature", "properties": { "VOLCANX020": 550.0, "NAME": "Mount Shasta", "ELEV": 4317.0, "TYPE": "Stratovolcano", "glb_dir": "models/shasta.glb", "STATE": "California", "IMG": "img/shasta.jpg", "LINK": "https://www.usgs.gov/volcanoes/mount-shasta" }, "geometry": { "type": "Point", "coordinates": [-122.20113, 41.41988] } },
        { "type": "Feature", "properties": { "VOLCANX020": 556.0, "NAME": "Lassen Volcanic Center", "ELEV": 3187.0, "TYPE": "Stratovolcano", "glb_dir": "models/lassen.glb", "STATE": "California", "IMG": "img/lassen.jpg", "LINK": "https://www.usgs.gov/volcanoes/lassen-volcanic-center" }, "geometry": { "type": "Point", "coordinates": [-121.5011, 40.49189] } },
        { "type": "Feature", "properties": { "VOLCANX020": 565.0, "NAME": "Long Valley Caldera", "ELEV": 3390.0, "TYPE": "Caldera", "glb_dir": "models/long_valley.glb", "STATE": "California", "IMG": "img/long_valley.jpg", "LINK": "https://www.usgs.gov/volcanoes/long-valley-caldera" }, "geometry": { "type": "Point", "coordinates": [-118.87098, 37.69994] } },
        { "type": "Feature", "properties": { "VOLCANX020": 580.0, "NAME": "Valles Caldera", "ELEV": 3430.0, "TYPE": "Caldera", "glb_dir": "models/valles.glb", "STATE": "New Mexico", "IMG": "img/valles.jpg", "LINK": "https://nmnaturalhistory.org/volcanoes/valles-caldera-jemez-volcanic-field" }, "geometry": { "type": "Point", "coordinates": [-106.5706, 35.87003] } },
        { "type": "Feature", "properties": { "VOLCANX020": 582.0, "NAME": "Mauna Loa", "ELEV": 4170.0, "TYPE": "Shield Volcano", "glb_dir": "models/mauna.glb", "STATE": "Hawaii", "IMG": "img/mauna.jpg", "LINK": "https://www.usgs.gov/volcanoes/mauna-loa" }, "geometry": { "type": "Point", "coordinates": [-155.59724, 19.47198] } },
        { "type": "Feature", "properties": { "VOLCANX020": 583.0, "NAME": "Kilauea", "ELEV": 1222.0, "TYPE": "Shield Volcano", "glb_dir": "models/kilauea.glb", "STATE": "Hawaii", "IMG": "img/kilauea.jpg", "LINK": "https://www.usgs.gov/volcanoes/kilauea" }, "geometry": { "type": "Point", "coordinates": [-155.28723, 19.42198] } }
    ]
}

// satellite base map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + apiKey, {
    id: 'mapbox/satellite-streets-v11',
    attribution: "Mapbox Satellite Base Map",
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

// generate and populate popups for each of the points
const volcanoLayer = L.geoJSON(volcanoPoints, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h1>' + feature.properties.NAME + '</h1>' +
            '<ul class="volcano-info"><li>Elev: ' + '<span>' + feature.properties.ELEV + ' ft</span></li>' +
            '<li>Type: ' + '<span>' + feature.properties.TYPE + '</li>' +
            '<li>Location: ' + '<span>' + feature.properties.STATE + '</li></ul>' +
            '<img src="' + feature.properties.IMG + '">' +
            '<model-viewer src="' + feature.properties.glb_dir + '" alt="" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer>'
        )
    }
}).addTo(mymap);
