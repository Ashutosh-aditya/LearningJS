
var space_shuttle = function (planet) //constructor function
{
    this.target_planet = planet;
};

var obj = new space_shuttle('Mars'); //new keywordis used due to constructor function
console.log(obj.target_planet);