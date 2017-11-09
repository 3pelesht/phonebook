const http = require('http')
const db = require('./db.js')

const port = 3000

const requestHandler = (request, response) => {
	response.setHeader('Content-Type', 'application/json')

	var json_response = {
		ok : false,
		statusCode : 1101,
		statusText : 'Unknow error'
	}

	if(request.url == '/get' && request.method == 'GET')
	{
		db.all("SELECT * FROM users", (err, rows) => {
			if( err )
			{
				json_response.statusCode = 1102
				json_response.statusText = err
				response.status = 500
			}
			else
			{
				json_response.ok = true
				json_response.statusCode = 200
				json_response.statusText = 'ok'
				json_response.data = rows
			}
			response.end(JSON.stringify(json_response))
		})
	}
	else if(request.url == '/add' && request.method == 'POST')
	{
		var body = ''
		request.on('data', (chunk) => {
			body += chunk
		})

		request.on('end', () => {
			try
			{
				var json = JSON.parse(body)
				if ( !json.displayname || typeof json.displayname !== 'string')
				{
					json_response.statusCode = 1104
					json_response.statusText = 'Displayname is not defined or not string type'
					response.status = 402
					response.end(JSON.stringify(json_response))
				}
				else if ( json.phonenumber && typeof json.phonenumber !== 'number')
				{
					json_response.statusCode = 1105
					json_response.statusText = 'Phonenumber is not defined or not number type'
					response.status = 402
					response.end(JSON.stringify(json_response))
				}
				else if ( json.mobile && typeof json.mobile !== 'number')
				{
					json_response.statusCode = 1106
					json_response.statusText = 'Mobile is not defined or not number type'
					response.status = 402
					response.end(JSON.stringify(json_response))
				}
				else if ( !json.mobile  || !json.phonenumber)
				{
					json_response.statusCode = 1107
					json_response.statusText = 'Phonenumber or mobile must be set'
					response.status = 402
					response.end(JSON.stringify(json_response))
				}
				else
				{
					const displayname = json.displayname
					const phonenumber = json.phonenumber ? json.phonenumber : null
					const mobile = json.mobile ? json.mobile : null

					db.run("INSERT INTO users (`displayname`, `phonenumber`, `mobile`) VALUES (?, ?, ?)", [displayname, phonenumber, mobile], (err, options) =>{
						if( err )
						{
							json_response.statusCode = 1109
							json_response.statusText = err
							response.status = 500
						}
						else
						{
							json_response.ok = true
							json_response.statusCode = 200
							json_response.statusText = 'ok'
							response.status = 200
						}
						response.end(JSON.stringify(json_response))
					})
				}
			}
			catch (e)
			{
				json_response.statusCode = 1103
				json_response.statusText = 'Request body is not json format'
				response.status = 402
				response.end(JSON.stringify(json_response))
			}
		})
	}
	else
	{
		json_response.statusCode = 1108
		json_response.statusText = 'Not found'
		response.status = 404
		response.end(JSON.stringify(json_response))
	}
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
})

module.exports = server