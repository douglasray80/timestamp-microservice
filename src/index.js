const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ optionSuccessStatus: 200 }))

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html')
})

// 3. An empty timestamp should return the current datetime
app.get('/api/timestamp', (req, res) => {
	const now = new Date()
	res.json({ unix: now.getTime(), utc: now.toUTCString() })
})

// 1. Create API endpoint at [project_url]/api/timestamp/:date_string?

// 2. Middleware should be able to parse a unix timestamp (integer) and an ISO-8601 format date string

// 4. A valid date should return JSON having the structure
// {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
// e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

// 5. If the date string is invalid the api returns a JSON having the structure
// {"error" : "Invalid Date" }.

app.listen(4000, () => {
	console.log('Your app is listening on http://localhost:4000')
})
