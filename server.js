var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80);
console.log('Server listening on port 80');

var flatten = require('./flatten.js');

var arrays = 3;
output = flatten.fn(arrays)
console.log(output);
console.log('[3]');

var arrays = { a: 1, b: "hi", c: /xyz/ };
output = flatten.fn(arrays)
console.log(output);
console.log('[{ a: 1, b: "hi", c: /xyz/ }]');

var arrays = [ 1, 2, 5 ];
output = flatten.fn(arrays)
console.log(output);
console.log('[ 1, 2, 5 ]');

var arrays = [ [ 1, [ [ [ 2, 3 ], 4, 5 ], 6 ] ] ];
output = flatten.fn(arrays)
console.log(output);
console.log('[ 1, 2, 3, 4, 5, 6 ]');

var arrays = [ undefined, [ null ] ]
output = flatten.fn(arrays)
console.log(output);
console.log('[ undefined, null ]');

