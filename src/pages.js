const Database = require("./database/db.js");
const saveOrphanage = require("./database/saveOrphanage")

module.exports = {
  index(req, res) {
    return res.render("index")
  },

  async orphanage(req, res) {
    const { id } = req.query;

    try {
      const db = await Database;
      const [orphanage] = await db.all(
        `SELECT * FROM orphanages WHERE id="${id}"`)
      
      orphanage.imagens = orphanage.imagens.split(",")
      orphanage.firstImagem = orphanage.imagens[0]
      orphanage.open_on_weekends = orphanage.open_on_weekends !== "0"

      return res.render("orphanage", { orphanage })
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    }
  },
  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages")
      return res.render("orphanages", { orphanages })
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    }
  },
  createOrphanage(req, res) {
    return res.render("create-orphanage")
  },

  async saveOrphanage(req, res) {
    const fields = req.body
    
    if (object.values(fields).includes('')) {
          return res.send('Todos os campos devem ser preenchidos!')
    }

    try {

      const db = await Database
        await saveOrphanage(db, { 
            lat: field.lat, 
            lng: field.lng, 
            name: field.name,
            about: field.about,
            whatsapp: field.whatsapp,
            imagens: field.imagens.tostring(),
            instructions: field.instructions,
            hours: field.hours,
            open_on_weekends: field.open_on_weekends,
    } )
      
    return res.redirect('/orphanages')

    } catch (error) {
      console.log(error)

      return res.send('Erro no banco de dados')
    }
    
  }
}
