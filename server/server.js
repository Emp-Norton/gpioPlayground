'use strict'
let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '/../client/dist/'))); // serving static images without doing the path join nonsense on line 10. taking image and serving it (connect server with node GPIO lib)
// facial recognition
// what am I looking at? (take pic and show on screen)
// morse code messager
// light-bright 
// pwm slider for passive buzzer

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/../client/dist/ml.jpeg'));
})
app.get('/', (req, res) => {
	res.status(200).json('ok')
})

app.listen(3000, () => {
	console.log('listening on port 3000');
})