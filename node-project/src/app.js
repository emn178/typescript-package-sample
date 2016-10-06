var package = require('typescript-package');
var Hello = package.Hello;
var World = package.World;

var hello = new Hello(new World());
console.log(hello.say());
