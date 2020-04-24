'use strict'
// vehicle simulation
// want a class to represent our vehicle
// vehicle should have attributes
// we should be able to add gas to the vehicle
// we should be able to drive for a certain amount of time
// we should be able to query it for the range left




class Vehicle {
    constructor(mpg, color, engineType, gasTankCapacity) {
        this.mpg = mpg;
        this.color = color;
        this.engineType = engineType
        this.gasTankCapacity = gasTankCapacity // hold the max capacity of our tank
        this.fuelLevel = 0; //holds the current fuel level in gallons
        this.mileage = 0;
    }


// gallons: number of gallons to add to the tank
    fuelUp(gallons) {
        this.fuelLevel = this.fuelLevel + gallons;
        if (this.fuelLevel > this.gasTankCapacity) {
            this.fuelLevel = this.gasTankCapacity;
        }
        if(this.fuelLevel < 0) {
            this.fuelLevel = 0;
        }
    }
    // the number of miles you are driving
    // want to update the fuel level based on the number of miles driven
    drive(miles){
        // distance/mpg gives us the amount of gas consumed
        // now that i have the amount of gas consumed, i can subtract it from the fuel level
        let gallonsConsumed = miles/this.mpg;
        this.fuelLevel = this.fuelLevel - gallonsConsumed;
        if(this.fuelLevel < 0) {
            this.fuelLevel = 0;
        }
    }
}


// my truck class
// should have a bedsize
// trucks only come in one color which is white
// it should override the drive method, such that if i am carrying cargo, my mpg is reduced by 15%

class Truck extends Vehicle {
    constructor(mpg, engineType, gasTankCapacity, bedSize) {
        super(mpg, 'white', engineType, gasTankCapacity);
        this.bedSize = bedSize;
        this.hasCargo = false;
    }
    loadUp() {
        this.hasCargo = true;
    }
    unLoad() {
        this.hasCargo = false;
    }
    drive(miles){
        // distance/mpg gives us the amount of gas consumed
        // now that i have the amount of gas consumed, i can subtract it from the fuel level
        let gallonsConsumed;
        if (this.hasCargo){
            gallonsConsumed = miles/(this.mpg * .85)
        } else {
            gallonsConsumed = miles/this.mpg
        }
        this.fuelLevel = this.fuelLevel - gallonsConsumed;
        if(this.fuelLevel < 0) {
            this.fuelLevel = 0;
        }
    }
}








let myJeep = new Vehicle(15,'blue', '5.3 liter', 24);
myJeep.fuelUp(10); // add 10 gallons
myJeep.drive(30); // let us drive 30 miles
console.log(myJeep.fuelLevel); // should be 8 gallons

let myTruck = new Truck (30, 'electric', 25, 'long');
myTruck.fuelUp(25);
myTruck.drive(4);
console.log(myTruck.fuelLevel)