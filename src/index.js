const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ optionSuccessStatus: 200 }))

// 1. Create API endpoint at [project_url]/api/timestamp/:date_string?

// 2. Middleware should be able to parse a unix timestamp (integer) and an ISO-8601 format date string

// 3. An empty timestamp should return the current datetime

// 4. A valid date should return JSON having the structure
// {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
// e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

// 5. If the date string is invalid the api returns a JSON having the structure
// {"error" : "Invalid Date" }.

app.listen(4000, () => {
	console.log('Your app is listening on http://localhost:4000')
})
