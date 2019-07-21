//create a class called Student. It should accept and asign a name, age, and id upon creation.
class Student {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    upgradeToSophmore(major) {
        return new Sophmore(this.name, this.name, this.id, major)
    }
}
  
//create a class called Sophmore. Have it extend the Student class as well as accept and assign a major upon creation.
class Sophmore extends Student {
    constructor(name,age,id,major){
        super(name,age,id);
        this.major = major;
    }
}
//create 2 instances of the Student class.
const student1 = new Student('Ben', 32, 11111);
const student2 = new Student('Finley', 18, 11112);

//create a method on the Student class called upgradeToSophmore, that when run creates a Sophmore class from the Student instance that the function was called on.

const sophmore1 = student1.upgradeToSophmore('pilot');
console.log(sophmore1)