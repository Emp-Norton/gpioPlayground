'use strict';
let morse = {};

morse['a'] = '. -';
morse['b'] = '- . . .'; 
morse['c'] = '- . - .'; 
morse['d'] = '- . .';
morse['e'] = '.';
morse['f'] = '. . - .'; 
morse['g'] = '- - .'; 
morse['h'] = '. . . .'; 
morse['i'] = '. .';
morse['j'] = '. - - -'; 
morse['k'] = '- . -'; 
morse['l'] = '. - . .'; 
morse['m'] = '- -'; 
morse['n'] = '- .'; 
morse['o'] = '- - -'; 
morse['p'] = '. - - .'; 
morse['q'] = '- - . -'; 
morse['r'] = '. - .'; 
morse['s'] = '. . .'; 
morse['t'] = '-'; 
morse['u'] = '. . -'; 
morse['v'] = '. . . -'; 
morse['w'] = '. - -'; 
morse['x'] = '- . . -'; 
morse['y'] = '- . - -';
morse['z'] = '- - . .'; 

let convertToBeeps = (string) => {
        let words = string.split(' ');
        let blips = [];
        words.forEach(word => {
                let chars = word.split('').map(char => morse[char]);
                blips.push(chars);
		blips.push(' ');
        })
        return blips.join()
}


module.exports.convertToBeeps = convertToBeeps;
