
var animalVoices=
{
    cat : 'Meow',
    dog : 'Bark',
    horse : 'Neigh',
    lion : 'Roar',
    Voice : function(animal) //as we are not using constructor so we dont use new keyword
    {
        console.log(animalVoices[animal]);
    }
};
var obj = animalVoices; //var obj = animalVoices() is worng as animalvoices is not a function
obj.Voice('dog');