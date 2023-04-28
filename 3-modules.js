// Modules

// CommonJS , every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-taste");
require("./7-mid-grenade");
// console.log(names);
console.log(data);

sayHi("chappal");
sayHi(names.john);
sayHi(names.smith);
sayHi(data.singlePerson.name);
sayHi(data.items[0]);
