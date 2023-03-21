
function add(...args)  //...args creates array of parameters
{
    var sum=0;
    for(var i=0;i<args.length;i++)
    {
        sum=sum+args[i];
    }
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8,9,10));