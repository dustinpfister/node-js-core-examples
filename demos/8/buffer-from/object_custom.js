let myThing = {
    x: 23,
    y: 32,
    valueOf: function () {
        let str = String.fromCharCode(this.x) + '\u00ff' + String.fromCharCode(this.y);
        return str;
    }
};

let buff = Buffer.from(myThing, 'ascii');

buff.forEach((byt)=>{
    console.log(byt);
});
// 23 255 32
