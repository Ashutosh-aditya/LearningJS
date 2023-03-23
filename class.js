var myobj = 
{
    prop1: 'prop-1',
    prop2: 'prop-2',
    prop3: 'prop-3',
    prop4: 'prop-4'
};

console.log(myobj['prop1']);
console.log(myobj.prop2);

// adding properties
myobj.prop4 = 'prop-4';
console.log(myobj);

// modifying properties
myobj.prop4 = 'prop-5';
console.log(myobj);

// deleting properties
delete myobj.prop4;
console.log(myobj);

// checking properties
console.log("Checking for prop-4 -> "+myobj.hasOwnProperty('prop4'));
console.log("Checking for prop-2 -> "+myobj.hasOwnProperty('prop2'));
