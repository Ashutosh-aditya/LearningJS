
const imp=require("./req3");
const disp=require('./req2');
const q=require("./req4") 
//it is required to assign a variable to the imported function like disp is assigned to require('./req2')
console.log(imp);
console.log(disp);
disp(imp.a);
// q();




