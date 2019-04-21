const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ optionSuccessStatus: 200 }))

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html')
})

// An empty timestamp should return the current datetime
app.get('/api/timestamp', (req, res) => {
	const now = new Date()
	res.json({ unix: now.getTime(), utc: now.toUTCString() })
})

// Create API endpoint at [project_url]/api/timestamp/:date_string?
app.get('/api/timestamp/:date_string?', (req, res) => {
	const { date_string } = req.params

	// if date_string is a unix timestamp, convert to integer
	const unix = parseInt(date_string * 1)

	let timestamp
	// test whether date_string is a number or a string
	// and pass the right type to Date()
	if (isNaN(unix)) {
		timestamp = new Date(date_string)
	} else {
		timestamp = new Date(unix)
	}

	// If the date string is invalid the api returns a JSON having the structure
	// {"error" : "Invalid Date" }.
	const response =
		timestamp == 'Invalid Date'
			? { error: 'Invalid Date' }
			: { unix: timestamp.getTime(), utc: timestamp.toUTCString() }

	// A valid date should return JSON having the structure
	// {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
	// e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
	res.json(response)
})

app.listen(4000, () => {
	console.log('Your app is listening on http://localhost:4000')
})
