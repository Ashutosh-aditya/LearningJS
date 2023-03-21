
var weather_forecast = 
{
    today : 
    {
        min : 20,
        max : 30
    },
    tomorrow : 
    {
        min : 30,
        max : 40
    }
};

// to find tomorrow's min temperature
var {tomorrow : {min : tmrw_min}}=weather_forecast;
console.log(tmrw_min);