const scan = require('./scan');

let source = '(p->q)->(qvr)';
let tokens = scan(source);

console.log(tokens);
