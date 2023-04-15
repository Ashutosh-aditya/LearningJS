function golf(n)
{
    switch (n) 
    {
        case 1 : return "1st"; break
        case 2 : return "2nd"; break
        case 3 : return "3rd"; break
        case 4 : return "4th"; break
        case 5 : return "5th"; break
        default : return "Not in top-5"; break
    }
}

console.log(golf(1));