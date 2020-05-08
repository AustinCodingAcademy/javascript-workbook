// 'use strict'

// // create a class that represents a Rectangle

// // constructor to take in the length of all 4 sides

// // method that returns the area
// // and
// // method that returns the perimeter

// class Rectangle
//  {
//   constructor(l, w){
//     this.l = l;
//     this.w = w;
//   }

//   // return the perimeter of the Rectangle

//   perimeter(){
//     return (this.l * 2) + (this.w * 2);

//   }

//   // returns the area of the Rectangle

//   area(){
//     return this.l * this.w;
//   }
// }



// let x = new Rectangle(4,2);

// console.log(x.area());
// console.log(x.perimeter());









// 'use strict'

// class Person {
//   //names
//   //age/
//   //height

//   constructor(name, height, age){
//     // console.log("Inside the constructor");
//     if(height || height < 0){
//       this.height = height;
//     } else {
//       this.height = 66;
//     }
    
//     this.name = name
    
//     this.age = age
//   }

//   greeting(){
//     return "Hi! my name is " + this.name;
//   }
// }


// let guy = new Person("Adam", 68, 31)
// let gal = new Person("Eve", 70, 23)



// console.log(guy.greeting());


'use strict'


//stand in for crew member
class Student {


  constructor(name, gradeLevel){
    this.name = name;
    this.gradeLevel = gradeLevel;
    this.homeRoom = null;
  }

  description(){
    return`${this.name} is a ${this.gradeLevel}th grader)`;
  }
}

//stand in for ship
class HomeRoom{
  constructor(roomNumber, teacher){
    this.teacher = teacher;
    this.roomNumber = roomNumber;
    this.students = [];
  }

  description(){


    if(this.students.length == 0) {
      return `Home room ${this.roomNumber} is managed by ${this.teacher}`;
    } else {
      return `Home room ${this.roomNumber} is managed by ${this.teacher} with ${this.students.length} students`;
    }
    
  }
}

let mike = new Student("Mike", 10);
let mark = new Student("Mark", 10);
let amy = new Student("Amy", 12);

let r1 = new HomeRoom("101", "Mr DeFazio");
let r2 = new HomeRoom("102", "Ms Maria");

console.log(r1.description());