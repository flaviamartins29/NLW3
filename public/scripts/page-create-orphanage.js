
const map = L.map('mapid').setView([-23.5469235,-46.9063989], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})
 //create localização

 let marker

 map.on('click', (event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   console.log(document.querySelector('[name=lat').value =lat);
   console.log(document.querySelector('[name=lng').value =lng);

   marker && map.removeLayer( marker )

   marker = L.marker([lat, lng], {icon})
   .addTo(map);

 })


 function addPhoto(){
     //pegar o container de fotos #imagens
     const container = document.querySelector('#imagens')

    //pegar o container para duplicar  .new-Imagens
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da utima imagem adicionada
    const newfieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)


    //verificar se o campo esta vazio

    const input = newfieldContainer.children[0]
    if (input.value == ""){
        return
    }
    input.value=""

    //limpar o campo antes de adicionar no container de imagens
    //.value = ""
    //adicionar o clone ao container de #imagens
    container.appendChild(newfieldContainer)
 }
 function deleteField(event) {
     const span = event.currentTarget

     const fieldsContainer = document.querySelectorAll('.new-upload')

     if (fieldsContainer.length < 2) {
        /// limpar o valor do campo
        span.parentNode.children[0].value = ""
         return
     }
    //deletar o campo
    span.parentNode.remove()
 }


 /// seleção do sim ou não

 function toggleSelecet(event){
     // retirar a class . active nesse botão clicado
    document.querySelectorAll('.button-select button')
    .forEach( button =>  button.classList.remove('active'))

     //pegar o botão clicado
     const button= event.currentTarget
     button.classList.add('active')


     //verificar se é sim ou Não
     // atualizar o input hidden com o valor selecionado
     const input = document.querySelector('[name="abertoFimdeSemana"]')

     input.value = button.dataset.value
     // colocar a classe .actvie


    }

    /* function validate(event) {
        const spanLat = document.querySelector('[name.lat]').value
        const spanLng = document.querySelector('[name.lng]').value


        // validar se lat e lng 
        if (spanLat & spanLng == ''){
            alert('selecione um ponto no mapa')
        }
         event.preventDefault()
         return
     }*/


 