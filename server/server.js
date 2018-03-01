                                                                                                                    
'use strict'
let express = require('express');
let path = require('path');
let app = express();

let Gpio = require('onoff').Gpio;
let buzz = new Gpio(10, 'out');
let red = new Gpio(17, 'out');
let green = new Gpio(27, 'out');
let blue = new Gpio(22, 'out');
let leds = {
        "red": red,
        "blue": blue,
        "green": green
}


app.use(express.static(path.join(__dirname, '/../client/dist/'))); // serving static images without doing the path join nonsense on line 10. taking image and serving it (connect server with node GPIO lib)

app.get('/light/:color/:toggle', (req, res) => {
        let color = leds[req.params.color];
        let toggle = req.params.toggle;
        toggle = toggle == "on" ? 1 : 0;
        console.log(color, toggle);
        color.writeSync(toggle);
        res.status(200).json('done')
}) 
                                                                          
app.listen(3000, () => {
	console.log('listening on port 3000');
})
