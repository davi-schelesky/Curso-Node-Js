// Módulo externo
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

// Módulo interno
import soma from './soma.js';
const a = parseInt(args['a']);
const b = parseInt(args['b']);
console.log(soma(a, b));