let str = 'write This is a string with spaces';

let firstSpace = str.match(/\s/);

// Get the command
let com = str; // com default to str
if (firstSpace) { // but if there is a space, it is what is before that space
    com = str.slice(0, firstSpace.index);
}

// get the text
let text = ''; // text defaults to a blank sting
if (firstSpace) { // but if there is a space, it is what is before that space
    text = str.slice(firstSpace.index+ 1, str.length);
}


console.log('com: ' + com);
console.log('text: ' + text);
