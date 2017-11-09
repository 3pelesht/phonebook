const telphoneServer = require('../')
const post = require('./post.js')
post(telphoneServer, (server) =>{
	const get = require('./get.js')
	get(server)
})

