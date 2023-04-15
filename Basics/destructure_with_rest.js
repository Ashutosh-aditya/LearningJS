
var ar = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list)
{
    var [ , ,...arr]=list;  //excluding first 2 elements of the array list is copied to arr array 
    return arr;
}

console.log(removeFirstTwo(ar));

function removeFirstThree(list)
{
    var [ , , ,...arr1]=list;  //excluding first 2 elements of the array list is copied to arr array 
    return arr1;
}

console.log(removeFirstThree(ar));