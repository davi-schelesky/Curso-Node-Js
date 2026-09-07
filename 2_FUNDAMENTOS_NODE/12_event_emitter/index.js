// EventEmmiter é uma classe do Node.js que permite criar, emitir e 
// escutar eventos personalizados de forma orientada a eventos

const EventEmitter = require ('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log("Durante");
});

console.log("Antes");

eventEmitter.emit("start");
console.log("Depois");