import L from "leaflet";
import "leaflet/dist/leaflet.css"
var map = L.map('map').setView([8.360254, 124.868261], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);