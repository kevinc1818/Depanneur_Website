var map = L.map('map').setView([45.468477756427276, -73.59378152714696], 17);

L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=x9a4DPofuTukoG8EF7g9', {
    maxZoom: 200,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([45.46839640150349, -73.59381304310281]).addTo(map);
marker.bindPopup("5301 Chem. de la Côte-Saint-Paul<br>Montréal, QC H4C 1X3").openPopup();
