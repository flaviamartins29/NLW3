const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

console.log(lat, lng)

const map = L.map('mapid', options).setView([lat, lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],     //width height
    iconAnchor: [29, 68],   //what point will anchor on the map
    popupAnchor: [170,2]    //whar point popup will anchor on the icon
});


L
    .marker([lat, lng], { icon })
    .addTo(map);

    /*function selectImage(event) {
        const button1 = event.currentTarget
         //remover todas as classes .active
        const buttons = document.querySelectorAll(".imagens button")
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button){
            button.classList.remove('active')
        }

        // selecionar a imagem clicada

       const  image = button.children[0]
       const imageContainer = document.querySelector('.orphanage-details > img')

        //atualizar o container de images

        imageContainer.src = image.src
        
        //adicionar a classe .active para este botão (imagem)
       button1.classList.add('active')

    } */

    function selectImage(event) {   /*evento de clique*/
        const button = event.currentTarget;
    
        //remover classes active
        buttons = document.querySelectorAll(".imagens button");
    
        buttons.forEach(button => {
            button.classList.remove("active");
        });
    
        //selecionar imagem clicada
        const image = button.children[0];
    
        const imageContainer = document.querySelector(".orphanage-details > img");
    
        //atualizar o container de imagem
        imageContainer.src = image.src;
    
        //adicionar a classe active no botão clicado
        button.classList.add("active");
    
        //console.log(button.children);
        console.log(buttons);
    }
    
    