//O módulo os serve para mostrar informações do sistema operacional
const os = require('os');

console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.type());