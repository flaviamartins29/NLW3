function saveOrphanage(db, orphanage) {
  return db.run(
    `
        INSERT INTO orphanages (
            lat, 
            lng,
            name,
            about,
            whatsapp,
            imagens,
            instructions,
            hour,
            open_on_weekends
        ) VALUES (
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.name}",
            "${orphanage.about}",
            "${orphanage.whatsapp}",
            "${orphanage.imagens}",
            "${orphanage.instructions}",
            "${orphanage.hour}",
            "${orphanage.open_on_weekends}"
        );
 `);
}
module.exports = saveOrphanage
