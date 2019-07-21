//create a class called FaceBookUser. Upon creation it should accept and assign a name, age, and city.
class FaceBookUser {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //create a method in FaceBookUser that console log's the user's name.
    userName() {
        //in a the method created, console.log(this.name)
        return this.name
    }
}

//create a new instance of FaceBookUser and assign it to a variable called hannah
//change hannah's age to 18
const hannah = new FaceBookUser("Hannah", 18, "London")

//create 3 more FaceBookUser instances
const bob = new FaceBookUser("Bob", 23, "Oakland")
const billy = new FaceBookUser("Billy", 37, "Austin")
const emily = new FaceBookUser("Emily", 66, "New Brunswick")
console.log("Hannah Object: ",hannah);
const hannahName = hannah.userName();
console.log("Just Hanna's name: ",hannahName)
console.log("Bob: ",bob)
console.log("Billy: ",billy)
console.log("Emily: ",emily)
