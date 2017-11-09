const http = require('http')

const options = {
	host: 'localhost',
	port: 3000,
	path: '/get',
	method : "GET"
}
module.exports = (telphoneServer) => {
	console.log("GET /get ...")
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
			telphoneServer.close( (err) => {
				if( err )
				{
					console.error(err)
				}
			})
		})
	})

	request.on('error', (e) => {
		console.error(`problem with request: ${e.message}`);
	});

	request.end()
}

