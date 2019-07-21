**What is Object Oriented Programming?**
    * It is where everything is an object or an instance of an object.

**What does instantiate mean?**

    ```
    * To instantiate is to create such an instance by, for example, defining one particular variation of object within a class, giving it a name, and locating it in some physical place. 1) In object-oriented programming, some writers say that you instantiate a class to create an object, a concrete instance of the class.
    ```

**How do you create a class?**

    * Use the `class` keyword and then name it.

    * Use the `constructor(){}` syntax to build the class object

**Explain how different types of classes of objects can interact.**

    * By the prototype chain of an object to find a value

    * Can use the keyword `new` to create a new instance of that object

    * Use the keyword `extends` 
    ```
    class Teacher extends Person {
        constructor(first, last, age, gender, interests, subject, grade) {
            super(first, last, age, gender, interests);

            // subject and grade are specific to Teacher
            this.subject = subject;
            this.grade = grade;
        }
    }
    let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
    snape.greeting(); // Hi! I'm Severus.
    snape.farewell(); // Severus has left the building. Bye for now.
    snape.age // 58
    snape.subject; // Dark arts
    ```

**What are methods and attributes and what do they do?**
    
    * Methods are functions that can be called on objects.

    * Attributes are defined within classes and objects which describe what attributes that object has.

**How do you describe closure?**

    * A closure is what is created every time a function is created. It is a function that is nestled within another function and cannot be reached by the global scope.

    * A closure gives you access to an outer function's scope from an inner function.