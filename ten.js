var a =[1,2,3]
var b = ["a","b","c","d"]


var c = ["a","b",6,0,true,545,"h"]

(7) ["a", "b", 6, 0, true, 545, "h"]
c.length
7
c[1]
"b"
typeof(c)
"object"
var city = ["amsterdam","london","newyork","delhi"]
undefined
city.pop()
"delhi"
city
(3) ["amsterdam", "london", "newyork"]
city.pop(1)
"newyork"
city.push("mumbai")
3
city
(3) ["amsterdam", "london", "mumbai"]


push => add at the end of Array
unshift => add at the begining of the Array
pop => takeout last value from the Array
shift => takeout first value from the Array

city
(5) ["dubai", "amsterdam", "london", "newyork", "delhi"]
city.shift()
"dubai"
city.slice(1,3)
(2) ["london", "newyork"]
city
(4) ["amsterdam", "london", "newyork", "delhi"]
city.splice(1,0,"Delhi")
[]
city
(5) ["amsterdam", "Delhi", "london", "newyork", "delhi"]
city.splice(2,1,"Helsinki")
["london"]
city
(5) ["amsterdam", "Delhi", "Helsinki", "newyork", "delhi"]
city.indexOf("newyork")
3
city.indexOf("delhi")
4
city.indexOf("pune")
-1
city.indexOf("boston")
-1
delete city[1]
true
city
(5) ["amsterdam", empty, "Helsinki", "newyork", "delhi"]
city[1]
undefined
city[1]="boston"
"boston"
city
(5) ["amsterdam", "boston", "Helsinki", "newyork", "delhi"]
var num = [1,2,3]
undefined
city+num
"amsterdam,boston,Helsinki,newyork,delhi1,2,3"
city.concat(num)
(8) ["amsterdam", "boston", "Helsinki", "newyork", "delhi", 1, 2, 3]
num.concat(city)
(8) [1, 2, 3, "amsterdam", "boston", "Helsinki", "newyork", "delhi"]