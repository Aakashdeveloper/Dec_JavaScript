function robot(name){
    this.name=name
    this.legs = 2
    this.color="white"
}

var pepper = new robot('pepper')


function human(name){
    this.name=name;
    this.hands = 2
}

human.prototype = new robot()
var eva = new human('eva')

eva
human {name: "eva", hands: 2}
eva.legs
2
eva.color
"white"

robot.prototype = new human()
var pepper = new robot('pepper')
