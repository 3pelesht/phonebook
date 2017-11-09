const sqlite = require('sqlite3')
const path = require('path')
const fs = require('fs')

const tmpPath = './tmp'

if(fs.existsSync(tmpPath))
{
	console.error('tmp folder is exists, run npm reinstall')
	return false
}

const installSql = fs.readFileSync(path.join('install', 'create.sql'))

fs.mkdirSync(tmpPath)

db = new sqlite.Database(path.join(tmpPath, 'db.sqlite'))

db.exec(installSql.toString(), (err) => {
	if ( err )
	{
		console.error(err)
	}
})
