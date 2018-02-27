'use strict'
let express = require('express');
let path = require('path');

let app = express();
app.use(express.static(path.join(__dirname, '/../client/dist/')));


app.get('/', (req, res) => {
	res.send('hi');
})

app.listen(3000, () => {
	console.log('listening on port 3000');
})