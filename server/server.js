'use strict'
let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../client/dist/ml.jpeg'));
})
app.get('/', (req, res) => {
	res.status(200).json('ok')
})

app.listen(3000, () => {
	console.log('listening on port 3000');
})