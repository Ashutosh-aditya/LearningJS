//basically used for copying array not referencing the array
const ar=[2,3,4,5,6,7,8,9,10,11];
let arr=[...ar];
console.log(arr);
arr[0]=1;//original arraay wont be modified
console.log(arr);
console.log(ar);