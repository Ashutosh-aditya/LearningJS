
function gt(x,y)
{
    return x>y ? x:y;
}

function numchk(n)
{
    return n>0 ? "Positive" : n==0 ? "Zero":"Negative";
}

var a=10,b=20;
console.log(gt(a,b));
console.log(numchk(a));