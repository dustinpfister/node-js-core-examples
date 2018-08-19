# filesystem-create-read-stream

These are some demos for making a read stream using the fs.createReadStream method in the node.js file system module.

## Basic example

A basic example just involves calling the fs.createStream method, passing the path to the file that I want to read. This returns an instance of a readable stream.

```js
let fs = require('fs');
 
let reader = fs.createReadStream('README.md');
 
reader.on('data', function (chunk) {
 
    console.log(chunk.toString());
 
});
```