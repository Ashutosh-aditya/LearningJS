
const arr=[3,-5,5.2,88,-99,97,21,-212,];

const sqlist=(array) => {
    const r =array.filter(num => Number.isInteger(num) && num>0).map(x=>x*x);
    return r;
};
const ans =sqlist(arr);
console.log(ans);