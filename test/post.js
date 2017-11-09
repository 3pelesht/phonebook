const http = require('http')

const options = {
	host: 'localhost',
	port: 3000,
	path: '/add',
	method : "POST"
}
module.exports = (telphoneServer, callback) => {
	console.log("POST /add ...")
	const request = http.request(options, (response) => {
		var body = ''
		response.on('data', (chunk) => {
			body += chunk
		})
		response.on('end', () => {
			var json_response;
			try
			{
				json_response = JSON.parse(body);
				console.log(json_response)
			}
			catch (e)
			{
				console.error(`body is not json format: ${body}`);
			}
			callback(telphoneServer)
		})
	})

	request.on('error', (e) => {
		console.error(`problem with request: ${e.message}`);
	});

	request.write(JSON.stringify({
		displayname : 'hasan',
		phonenumber : 9356032043,
		mobile : 9356032043,
	}))
	request.end()
}

