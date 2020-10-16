const map = L.map('mapid').setView([-23.5469235,-46.9063989], 15);

L.tileLayer
('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})
const popup = L.popup({
    closeButton: false,
    className: "map-poupup",
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="chose-orphanege"><img src=".public/images/arrow-white.svg"></a>')

L
    .marker([-23.5469235,-46.9063989], { icon })
    .addTo(map)
    .bindPopup(popup)
    .openPopup();