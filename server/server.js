'use strict'
let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('*', (req, res) => {
	// change this to serve up whatever images are in a given directory
	// use to interact with RPi camera, see what it's seeing (stream video?)
	res.sendFile(path.join(__dirname, '/../client/dist/ml.jpeg'));
})

// add end points for LED interaction, piezo buzzer / pulse-width modulation slider 
// load up 'training' images for facial recognition
app.get('/', (req, res) => {
	res.status(200).json('ok')
})

app.listen(3000, () => {
	console.log('listening on port 3000');
})
