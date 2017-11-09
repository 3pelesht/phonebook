const fs = require('fs')
const path = require('path')

const rmTmpFolder = (path_dir) => {
	if( fs.existsSync(path_dir) ) {
		fs.readdirSync(path_dir).forEach(function(file,index){
			var curPath = path.join(path_dir, file)
			if(fs.lstatSync(curPath).isDirectory()) {
				rmTmpFolder(curPath)
			} else {
				fs.unlinkSync(curPath)
			}
		})
		fs.rmdirSync(path_dir)
	}
}

rmTmpFolder('./tmp')

require('./index.js')