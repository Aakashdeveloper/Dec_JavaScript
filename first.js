es
Ecma Script

Es5
Es6


//////////// Data Types/////////////
String  = "john" '10'   "true"  'hi"  "jjj'
Number =   10 2220 ,220.56436 
Boolean= true/false
null
undefined

/////////////Decalre Varible/////////////
Es5

var a = "London"
var b = 20
var c = true


var a = "London"
undefined
typeof(a)
"string"
var b = 10
undefined
typeof(b)
"number"
var c = true
undefined
typeof(c)
"boolean"
var c = '11'
undefined
typeof(c)
"string"

var d = 10.64
undefined
typeof(d)
"number"



///////////////Basic operations/////////////
var a = 10
var b = 2

a+b
12
a-b
8
a*b
20
a/2
5
a%b
0
10%3
1
10%4
2

5%10 = 5
8%2 = 0
2%8 = 2

var a = "hi"
var b = " javascript"

+ with number is addition 
+ with string is concat

var a = "hi"
var b = " javascript"
undefined
a+b
"hi javascript"
a-b
NaN
a*b
NaN
a/b
NaN
a%b
NaN

var a = "hi"
undefined
var b = 10
undefined
a+b
"hi10"
b+a
"10hi"


number+number= number
number+string = string
string+number = string
string+string = string

10+10+"10"  
"10"+10+10  
10+"10"+10 

10+10+"10"
"2010"
"10"+10+10
"101010"
10+"10"+10
"101010"

/////////////////// Values type////////////
truthy = true, >0 
falsy  = false, null, undefined , 0 , <0 


//////////boolean deep dive///////////////
true == 1
false == 0


true+true
2
false+false
0
true+false
1
true+10
11
true+"hi"
"truehi"