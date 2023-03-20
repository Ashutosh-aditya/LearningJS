function isodd(n)
{
    i=101; 
    // without let,var keyword declarations are global
    if(n%2==0)
        return false;
    else 
        return true;
}
console.log(isodd(8));
console.log(isodd(5));
console.log(i);