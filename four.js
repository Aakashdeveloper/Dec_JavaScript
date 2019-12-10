var a = "newyork"
var a = "newyork"
undefined
a.toUpperCase()
"NEWYORK"
a.toLowerCase()
"newyork"
a.length
7
a.charAt(0)
"n"
a.charAt(3)
"y"
var name =" john "
undefined
name.length
6
name.trim()
"john"
var a = "my city is newyork"
undefined
a.replace("newyork","delhi")
"my city is delhi"

var a = "i am learning javascript"
undefined
a.replace('a','A')
"i Am learning javascript"
a.replace(/a/g,"A")
"i Am leArning jAvAscript"

var a = "i am learning javascript"
undefined
a.replace('a','A')
"i Am learning javascript"
a.replace(/a/g,"A")
"i Am leArning jAvAscript"
a.replace('/ /g','_')
"i am learning javascript"
a.replace(/ /g,'_')
"i_am_learning_javascript"

var city = "London"
undefined
city.slice(1)
"ondon"
city.slice(1,3)
"on"
var a = "newyork"
undefined
a.slice(1,3)
"ew"
a.slice(3)
"york"

var a  = "rAshMi"
> Rashmi

var a  = "rAshMi"
a.charAt(0)

var a  = "rAshMi"
a.charAt(0)
"r"
var a  = "rAshMi"
a.charAt(0).toUpperCase()
"R"
a.slice(1).toLowerCase()
"ashmi"
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
"Rashmi"

var a ="JavaScript"
var a ="JavaScript"
undefined
a.substring(3,7)
"aScr"
a.slice(0,3)
"Jav"
a.substr(3,-1)
""
a.substr(3,222)
"aScript"
a.substr(3,2)
"aS"
a.substring(3,-1)
"Jav"

slice(start,end)=> can only take +ve value
substring(start,end) => can take -vve value also
substr(start,length)

var a = "Nareshit"
undefined
a.indexOf('a')
1
a.indexOf('ee')
-1
a.indexOf('e')
3
a.indexOf('ee')
-1
a.indexOf('y')
-1

var a = "knowledge"

var url="https://github.com/Aakashdeveloper"
undefined
url.split('/')
(4) ["https:", "", "github.com", "Aakashdeveloper"]0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"length: 4__proto__: Array(0)
var out = url.split('/')
undefined
out[3]
"Aakashdeveloper"
out[out.length-1]
"Aakashdeveloper"

var a = "knowledge"
undefined
a.split("")
(9) ["k", "n", "o", "w", "l", "e", "d", "g", "e"]