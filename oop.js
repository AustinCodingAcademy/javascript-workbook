


class Person{
    constructor(pname,page,pzipcode){
        if(pname === ''){
            console.log("error: name is required")
        }
        //var me = {};
        this.name = pname;
        this.age = page;
        this.zipcode =pzipcode;
        this.printName = function(){
            //there is a invisible variable here called this.
            //its there because this function is  a method
            console.log(this.name)
        }
    }
    //return me;
}
// in order to make a Person object, you should call the Person constructor function
var person3 = new Person('jon',22,78741);
var person4 = new Person('dan',23,78745);

person3.printName();
person4.printName();

