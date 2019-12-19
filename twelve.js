function add(a,b){
    return a+b
}
add(1,2)
3

//es5
function isEven(userInput){
    var output;
    if(userInput%2==0){
        output = "number is even"
    }else{
        output="number is odd" 
    }

    return output;
}

isEven(1)
"number is odd"
isEven(10)
"number is even"

function
method

//method
var isEven = function(userInput){
    var output;
    if(userInput%2==0){
        output = "number is even"
    }else{
        output="number is odd" 
    }

    return output;
}

//es6
var isEven = (userInput) => {
    var output;
    if(userInput%2==0){
        output = "number is even"
    }else{
        output="number is odd" 
    }

    return output;
}