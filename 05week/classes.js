'use strict'

class Person {
    // constructor is a 
    constructor(n, isMale) {
        //console.log('inside the constructor');
        this.age = 21
        if(isMale) {
            this.name = n
            this.height = 72
        } else {
            this.name = n
            this.height = 70
        }
    }
}

let guy = new Person('Adam', true)
let gal = new Person('Eve', false)
//console.log('mike =', guy);
//console.log('adam =', gal);

class Rectangle {
    constructor (L, H) {
    this.length = L
    this.height = H
    }
    perimeter() {
       return (2*this.length) + (2*this.height);
    }
    area() {
        return this.length*this.height
    }
}
let Rectangle1 = new Rectangle (10,10)
console.log(Rectangle1, 'perimeter: ', Rectangle1.perimeter(), 'area: ', Rectangle1.area())