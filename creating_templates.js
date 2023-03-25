const details=
{
    Shopping_list :['Mango','Apple','Banana'],
    vechiles :['Car','Bus','Helicopter'],
    Plants :['fruit','Vegetable']
};

function dataEntry(arr)
{
    res=[];
    for(var i=0;i<arr.length;i++)
    {
        res.push(`I have ${arr[i]}`)
    }
    return res;
};
console.log(dataEntry(details.Shopping_list));

