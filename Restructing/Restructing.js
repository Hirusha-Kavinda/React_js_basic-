// old version

var name = "everest"
var height = 8848;
var output = function(){
    console.log(`MT. ${this.name} is ${this.height} meter tall`)
}

var adventureClimbing = { name, height, output};
adventureClimbing.output();


// es6 

var adventureClimbing = {
    name: 'Everest',
    height: 8848,
    output(){
        console.log(`Mt. ${this.name} is ${this.height} meter all`)
    }
};

adventureClimbing.output()