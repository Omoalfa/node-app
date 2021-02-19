const express = require('express') 

const app = express();

app.get('/', (req, res) => {
	return res.send('my node mobile app')
})

app.get('/about', (req, res) => {
	return res.send('this is the about page')
})

app.listen(3000, () => {
	console.log("listening on port 3000")
})
