
const path = require('path');
console.log(path.sep);
console.log(path.join('fd1','fd2','fd3','fd4'));
const str=path.join('fd1','fd2','fd3','fd4');
console.log(path.resolve(__dirname,str));
console.log(path.resolve(__dirname));
console.log(path.resolve(__filename));



