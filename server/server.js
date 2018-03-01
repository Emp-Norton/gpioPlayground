                                                                                                                    
'use strict'
let express = require('express');
let path = require('path');
let morse = require('./helpers/morse.js');
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


app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('/light/:color/:toggle', (req, res) => {
  let color = leds[req.params.color];
  let toggle = req.params.toggle;
  toggle = toggle == "on" ? 1 : 0;
  color.writeSync(toggle);
  res.setHeader("Access-Control-Allow-Origin", "*"); // move this to an options hash to avoid repetition 
  res.status(200).json("done")
}) 

app.get('/buzzer/:string', (req, res) => {
  let message = req.params.string;
  let morseMessage = morse.convertToBeeps(message);

  console.log(message, morseMessage);

  let disable = () => {
    buzz.writeSync(0);
  } 

  buzz.writeSync(1);
  setTimeout(disable, 250);
  res.setHeader("Access-Control-Allow-Origin", "*"); // move this to an options hash to avoid repetition 
  res.status(200).json(morseMessage)
})

                                                                          
app.listen(3000, () => {
  console.log('listening on port 3000');
})
