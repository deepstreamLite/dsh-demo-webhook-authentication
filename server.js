const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/login', (req, res) => {
	if (req.body.email === 'webhook@user.com' &&
		req.body.password === 'password') {
		res.json({
			userId: Date.now(),
			clientData: { favouriteColour: 'blue' },
			serverData: { role: 'admin' }
		})
	} else {
		res.status(404).end()
	}
})

app.listen(3000, () => {
	console.log('Auth server running at localhost:3000')
})
