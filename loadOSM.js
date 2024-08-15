var element = document.getElementById("map");

var map = L.map(element);
L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
        "&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors",
}).addTo(map);
console.log("187");
var target = L.latLng("50.802410", "7.259960");

map.setView(target, 14);

L.marker(target).addTo(map);