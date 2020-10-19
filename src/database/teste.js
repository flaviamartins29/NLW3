const Database = require('./db')

const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
   //inserir dados na tabela
   await saveOrphanage(db,{ 
      lat:"-23.5569235",
      lng:"-46.9163989",
      name:"Lar de carinho",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ vunerabiliadade social",
      whatsapp:"983346254",
      imagens:[
         "https://images.unsplash.com/photo-1600669890721-8318b53bbf84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

     "https://images.unsplash.com/photo-1600959860499-9478c1d56794?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
  ].toString(),
      instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      hour:"Horário de visitas Das 18h até 8h",
      open_on_weekends:"0"})


   // consultar dados na tabela
    //const SelectOrphanages= await db.all("SELECT * FROM orphanages")
      //console.log(SelectOrphanages) 

   //consultar dados pelo id
   //const orphanage = await db.all('SELECT * FROM orphanages  WHERE id = 8')
  //console.log(orphanage)

   //deletar um dado da tabela
  //console.log( await db.run("DELETE FROM orphanages WHERE id = 4"))
  
})