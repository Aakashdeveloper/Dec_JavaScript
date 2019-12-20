var a = 10
var a => declaring a value
a = 10 => assignment of value

var => we can redeclare and reassign
let => we cannot redeclare but can reassign
const => we cannot redeclare neither reassign

var a  =[10,44,32,65,71]

function mul(userinput){
    return userinput*3
}

a.map(mul)

a.map((userinput) => { return userinput*3})
a.filter((userinput) => { return userinput*3})


var a = [0,1,2,3]
a.map((userinput) => { return userinput*1})
[0, 1, 2, 3]
a.filter((userinput) => { return userinput*1})
[1, 2, 3]