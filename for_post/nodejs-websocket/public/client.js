/*
var xml = new XMLHttpRequest();
xml.open('get', 'http://localhost:8095/');
xml.setRequestHeader('Upgrade', 'websocket');
xml.setRequestHeader('Connection', 'Upgrade');

xml.onreadstatechange = function(){
	console.log(this);
};
xml.send();
*/

let socket = new WebSocket("ws://localhost:8095/");

socket.onopen = function (e) {
    console.log('okay we opened a connection');
    socket.send('foobar');
};

socket.onmessage = function (e) {
    console.log('we have a message');
    console.log(e.data.toString());
};

socket.onclose = function (e) {
    console.log('socket closed')
    if (e.wasClean) {
        console.log('clean close');
        console.log(e.code);
        console.log(e.reason);
    } else {
        console.log('conection died');
        console.log(e.code);
    }
};

// an on error handler can be defined
// but the error object contains to message
socket.onerror = function (e) {
    console.log(e.constructor.name); // Event
    console.log(e.message); // undefined
};
