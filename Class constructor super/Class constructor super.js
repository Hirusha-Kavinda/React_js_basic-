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
// super class
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
// sub class
class expedition extends Holiday2 {
    constructor(destination, days, gear){
        super(destination, days)
             this.gear = gear;
    }

    info(){ 
        super.info();
        console.log(`Bring your ${this.gear.join(" and you")}`)       
    }
}

const tripWithGear = new expedition('Everest' , 30 , ['Sunglasses','Flags','Camera']);
tripWithGear.info();