var coding=["JavaScript","Python","Node"]
var x;
for(x of coding){
    console.log(x)
}

JavaScript
Python
Node


var car = {
    brand:'BMW',
    color:'RED',
    price:244443
}

var  out='';
var j;

for(j in car){
    out +=car[j]+" "  
}