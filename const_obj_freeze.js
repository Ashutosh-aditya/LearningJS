function freezeObj ()
{
    const mathConstants={
        PI : 3.14,
        e:2.71
    };
    Object.freeze(mathConstants);
    try
    {
        mathConstants.PI=99;
    }
    catch(err)
    {
        console.log(err);
    }
    console.log(mathConstants);
}

let obj=freezeObj();
