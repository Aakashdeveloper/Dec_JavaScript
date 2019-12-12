Date()
"Thu Dec 12 2019 00:42:53 GMT+0000 (Greenwich Mean Time)"
var a = new Date().getDay()
undefined
a
4
var a = new Date().getDate()
undefined
a
12
var a = new Date().getMonth()
undefined
a
11

switch(new Date().getDay()){
    case 0:
        console.log('Today is sunday')
        break;
    case 1:
        console.log('Today is tuesday')
        break;
    case 4:
        console.log('Today is thrusday')
         break;
    default:
        console.log('i dont know')
}

switch(a%2==0){
    case true:
        console.log('number is even')
        break;
    case false:
        console.log('number is odd')
        break;
    default:
        console.log('Unknown number')
}


if(a%2==0 || a%3==0){
    console.log("yes possible")
}else{
    console.log("not possible")
}

give 5 chance
in case user win than set count to 0
else keep checking till 5 and when its 5 
say you loose