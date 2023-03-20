var n=10;
var ar=[],ar1=[];
for(var i=0; i<20; i++)
{
    ar.push(i+1);
    ar1.push(i+1);
}
// console.log(ar);
for(var i=100; i<110; i++)
{
    // shift removes first element from the array opposite does th unshift i.e, add element to 1st position of the array 
    ar.shift();
    ar1.unshift(i);
}
console.log("Shifted array\n"+ar);
console.log("Unshifted array\n"+ar1);