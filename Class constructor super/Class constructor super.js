//prototype function

function Holiday(destination, days){
    this.destination = destination
    this.days = days
}


Holiday.prototype.info = function(){
    console.log(this.destination + "| " + this.days + "days");
};

var nepal = new  Holiday('Nepal' , 30);
console.log(nepal.info())



// using class and constructors

class Holiday2 {
    constructor(destination, days){
        this.destination = destination
        this.days = days
    }
    info(){
        console.log(`${this.destination} will take ${this.days} days.`)
    }
}

const trip = new Holiday2("kathmandu, Nepal",30)
console.log(trip.info())



// extent one class to other class