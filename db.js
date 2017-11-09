const sqlite = require('sqlite3')
module.exports = new sqlite.Database('./tmp/db.sqlite')