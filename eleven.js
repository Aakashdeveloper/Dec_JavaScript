RegEx

^([a-z])$

var a = "5768"
a.match("^([a-z]{2,10})$")
var a = "5768"
a.match("^([a-z])$")
null
var a = "john"
a.match("^([a-z])$")
null
var a = "j"
a.match("^([a-z])$")
(2) ["j", "j", index: 0, input: "j", groups: undefined]
var a = "john"
a.match("^([a-z]{2,10})$")
(2) ["john", "john", index: 0, input: "john", groups: undefined]

^([0-9]{10})$

var email="a@a.com"
^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$