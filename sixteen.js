//Literal 
var country = {
    name:'India',
    capital:'Delhi',
    population:7878787879654
}

country.name
"India"
country.population
7878787879654
country['name']
"India"
country.language = "Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 7878787879654, language: "Hindi"}
delete country.population
true
country
{name: "India", capital: "Delhi", language: "Hindi"}


//Constructor 
var country = new Object();
var car = new Object();
undefined
typeof(car)
"object"
car.color="red"
"red"
car
{color: "red"}
car.brand="audi"
"audi"
car
{color: "red", brand: "audi"}
car.brand
"audi"
delete car.brand
true
car
{color: "red"}

var welcome = {
    firstname:'bob',
    lastname:'elven',
    greet:function(){
        return "hi bob welcome to object"
    }
}

welcome.greet()
"hi bob welcome to object"


var calc = {
    sum: function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    }
}


var city = [
    {name:"Delhi",country:"India"},
    {name:"Helsinki",country:"Finland"},
    {name:"Paris",country:"France"}
]
city
(3) [{…}, {…}, {…}]
city[0].name
"Delhi"