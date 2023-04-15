//used for quick allotment ob values from objects to a variables

var obj={x:100,y:1000,z:10000};
//remember the direction is reversed i.e, from a=5 -> 5=a here x copies its value to a ,rest follow similarly
var {x:a,y:b,z:c} = obj; 
console.log("a="+a+"\nb="+b+"\nc="+c+"\n");