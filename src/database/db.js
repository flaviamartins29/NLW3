const Database = require('sqlite-async')


//.then(function(db){})
function execute(db) {
      return db.exec(`
        CREATE TABLE IF NOT EXISTS  orphanages (
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT, 
            lng TEXT,
            name TEXT,
            about TEXT, 
            whatsapp TEXT,
            imagens TEXT,
            instructions TEXT,
            hour TEXT,
            open_on_weekends text

        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)