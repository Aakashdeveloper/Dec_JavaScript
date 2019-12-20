/*function sayhi(){
    return "hii to you"
}
console.log(sayhi())
*/

(function(){
    console.log("Welcome to the session")
}())

function loopme(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}

//Generator(Es6)
function * loopme(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

undefined
var out = loopme(5)
undefined
out.next()
{value: 0, done: false}
out.next()
{value: 1, done: false}
out.next()
{value: 2, done: false}
out.next()
{value: 3, done: false}
out.next()
{value: 4, done: false}
out.next()
{value: undefined, done: true}
out.next()
{value: undefined, done: true}
