const path = require('path');
console.log("import")
require('ts-node').register();
require(path.resolve(__dirname, 'worker.ts'));