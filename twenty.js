function language(name,country){
    this.name =name;
    this.country = country ;
}


var hindi = new language('Hindi','India')


///////////////////////

class geo{
    constructor(lat,long){
        this.lat=lat;
        this.long=long
    }
}

class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name =name;
        this.country = country ;
        this.pop= 1000
    }
}

var english =new language1('English','England')
var french = new language1('french','france',10.0990,-89.89)
