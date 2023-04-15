
// Anonymous functions are nameless functions but they can also have parameters
//syntax
// let val =() => { };
let a=10,b=100;
let str=() =>{return new Date();}
var x=(a,b) => a.concat(b);

console.log(str());
console.log(x([2,2,4],[7,8,9]));
//to  output function must return something

