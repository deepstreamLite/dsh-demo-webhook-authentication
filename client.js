const deepstream = require('deepstream.io-client-js')

const client = deepstream('<Your app URL>')

client.login({
	type: 'webhook',
	email: 'webhook@user.com',
	password: 'password'
}, (success, data) => {
	console.log('logged in', success, data)
})
