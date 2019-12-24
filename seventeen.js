var firstname = "John"
var welcome = {
    firstname:'bob',
    lastname:'elven',
    greet:function(){
        return `hi ${this.firstname} welcome to object`
    }
}


function calc(){
    this.sum = function(a,b){ return a+b}
    this.sub = function(a,b){return a-b}
}

var add = new calc()
var add = new calc()
undefined
add.sum(1,2)
3

function database(){
    this.find = function(table){return `select * from ${table}`};
    this.join = function(table,first,second){return `Select ${first}.name, ${second}.city inner join where ${first}.id= ${second}{id} from ${table}`}
}

var student = new database()
student.join('student', 'subject', 'address')
"Select subject.name, address.city inner join where subject.id= address{id} from student"


////////////////
var person = {
    details: function(city,country){
        return this.firstname+" "+this.lastname+" "+this.city+" "+this.country
    }
}

var john={
    firstname:'john',
    lastname:'eva'
}

person.details.call(john,['London','England'])
"john eva"
person.details.apply(john)
"john eva"

person.details.call(john,['London','England'])
"john eva London,England undefined"
person.details.apply(john,['London','England'])
"john eva London England"
person.details.call(john,'London','England')
"john eva London England"
person.details.apply(john,'London','England')
VM995:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:16