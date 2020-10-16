
const map = L.map('mapid').setView([-23.5469235,-46.9063989], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})
 //create localização

 let marker

 map.on('click', (event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   marker && map.removeLayer( marker )

   marker = L.marker([lat, lng], {icon})
   .addTo(map);

 })
